import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarModuloComponent } from '../cadastrar-modulo/cadastrar-modulo.component';
import { ModuloService } from '../../core/services/modulo.service';

@Component({
  selector: 'app-gerenciar-modulos',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule, CadastrarModuloComponent],
  templateUrl: './gerenciar-modulos.component.html',
  styleUrl: './gerenciar-modulos.component.scss'
})
export class GerenciarModulosComponent implements OnInit {

  constructor(private moduloService: ModuloService) {

  }

  ngOnInit() {
    this.carregarModulos();
  }

  carregarModulos() {
    this.moduloService.listar().subscribe({
      next: (data) => {
        this.modulos = data;
        console.log('MODULOS:', this.modulos);
      },
      error: (err) => {
        console.error('Erro ao listar:', err);
      }
    });
  }

  view: 'lista' | 'form' = 'lista';

  modulos: any[] = [];
  moduloSelecionado: any = null;

  novoModulo() {
    this.moduloSelecionado = null;
    this.view = 'form';
  }

  editarModulo(modulo: any) {
    this.moduloService.buscarPorId(modulo.id).subscribe({
      next: (data) => {
        console.log('MODULO BACK:', data); 
        this.moduloSelecionado = data;
        this.view = 'form';
      },
      error: (err) => {
        console.error('Erro ao buscar módulo:', err);
      }
    });
  }

  salvarModulo(modulo: any) {
    if (this.moduloSelecionado?.id) {
      this.moduloService.atualizar(this.moduloSelecionado.id, modulo).subscribe({
        next: () => {
          this.carregarModulos();
          this.view = 'lista';
        }
      });
    } else {
      this.moduloService.salvar(modulo).subscribe({
        next: () => {
          this.carregarModulos();
          this.view = 'lista';
        }
      });
    }
  }

  removerModulo(modulo: any) {
    this.moduloService.deletar(modulo.id).subscribe({
      next: () => {
        this.carregarModulos();
      },
      error: (err) => {
        console.error('Erro ao deletar:', err);
      }
    });
  }

  cancelar() {
    this.view = 'lista';
  }

}
