import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../../core/primeNgModule';

import { TrilhasService } from '../../core/services/trilhas.service';

import { Trilha } from '../../core/models/type';
import { CadastrarTrilhaComponent } from './cadastrar-trilha/cadastrar-trilha.component';
import { ModuloService } from '../../core/services/modulo.service';
import { LoadingService } from '../../core/services/loading.service';
import { finalize } from 'rxjs';
import { LoadingComponent } from '../../components/loading/loading.component';



@Component({
  selector: 'app-gerenciar-trilhas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    CadastrarTrilhaComponent,
    LoadingComponent
  ],
  templateUrl: './gerenciar-trilhas.component.html',
  styleUrl: './gerenciar-trilhas.component.scss'
})
export class GerenciarTrilhasComponent implements OnInit {

  trilhas: Trilha[] = [];
  modulosPorTrilha: { [key: number]: number } = {};

  trilhaSelecionada: any = null;

  view: 'lista' | 'form' = 'lista';

  constructor(
    private trilhasService: TrilhasService,
    public loadingService: LoadingService,

  ) { }

  ngOnInit(): void {
    this.carregarTrilhas();

  }


  carregarTrilhas() {

    this.loadingService.show();

    this.trilhasService
      .listar()
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe({

        next: (data) => {

          this.trilhas = data;

          console.log(
            'TRILHAS:',
            this.trilhas
          );
        },

        error: (err) => {

          console.error(
            'Erro ao listar trilhas:',
            err
          );
        }
      });
  }

  novaTrilha() {
    this.trilhaSelecionada = null;
    this.view = 'form';
  }

  editarTrilha(trilha: any) {
    this.trilhaSelecionada = trilha;
    this.view = 'form';
  }

  atualizarTrilha(trilha: any) {


    this.trilhasService.atualizar(trilha.id, trilha).subscribe({
      next: (data) => {

        console.log('TRILHA BACK:', data);

        this.trilhaSelecionada = data;

        this.view = 'form';
      },
      error: (err) => {
        console.error('Erro ao buscar trilha:', err);
      }
    });
  }

  salvarTrilha(trilha: any) {

    if (this.trilhaSelecionada?.id) {

      this.trilhasService.atualizar(this.trilhaSelecionada.id, trilha).subscribe({
        next: () => {

          this.carregarTrilhas();

          this.view = 'lista';
        }
      });

    } else {

      this.trilhasService.cadastrar(trilha).subscribe({
        next: () => {

          this.carregarTrilhas();

          this.view = 'lista';
        }
      });

    }
  }

  removerTrilha(trilha: any) {

    this.trilhasService.remover(trilha.id).subscribe({
      next: () => {

        this.carregarTrilhas();

      },
      error: (err) => {
        console.error('Erro ao remover trilha:', err);
      }
    });
  }

  cancelar() {
    this.view = 'lista';
  }
}