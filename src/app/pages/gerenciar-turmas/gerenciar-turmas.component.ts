import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { LoadingComponent } from "../../components/loading/loading.component";
import { LoadingService } from '../../core/services/loading.service';
import { TurmasService } from '../../core/services/turmas.service';
import { CadastrarTurmaComponent } from "./cadastrar-turma/cadastrar-turma.component";

@Component({
  selector: 'app-gerenciar-turmas',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, LoadingComponent , CadastrarTurmaComponent],
  templateUrl: './gerenciar-turmas.component.html',
  styleUrl: './gerenciar-turmas.component.scss'
})
export class GerenciarTurmasComponent implements OnInit {

  view: 'lista' | 'form' = 'lista';
  turmas: any[] = [];
  turmaSelecionada: any = null;

  constructor(
    public loadingService: LoadingService,
    public turmaService: TurmasService
  ) {

  }

  ngOnInit(): void {
    this.carregarTurmas();
  }

  public novaTurma () {
    this.turmaSelecionada = null;
    this.view = 'form';
  }

  public carregarTurmas () {
    this.loadingService.show();

    // this.turmasService.listar().subscribe({
    //   next: (data) => {
    //     this.turmas = data;
    //   }
    // });

    setTimeout(() => {
      this.loadingService.hide();
    }, 2000);
  }

  public editarTurma (turma: any) {
    this.turmaSelecionada = turma;
    this.view = 'form';
  }

  public excluirTurma (turma: any) {
    if (confirm(`Tem certeza que deseja excluir a turma ${turma.nome}?`)) {
     
    }
  }

  salvarTurma(turma: any) {

    if (this.turmaSelecionada?.id) {

      this.turmaService.atualizar(this.turmaSelecionada.id, turma).subscribe({
        next: () => {

          this.carregarTurmas();

          this.view = 'lista';
        }
      });

    } else {

      this.turmaService.cadastrar(turma).subscribe({
        next: () => {

          this.carregarTurmas();

          this.view = 'lista';
        }
      });

    }
  }

  cancelar() {
    this.view = 'lista';
  }

}
