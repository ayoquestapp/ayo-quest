import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ConfigQuizComponent } from "./config-quiz/config-quiz.component";
import { PreencherQuestaoComponent } from "./preencher-questao/preencher-questao.component";
import { TipoQuestaoComponent } from "./tipo-questao/tipo-questao.component";

import { MultiplaEscolhaComponent } from './lista-tipos-questoes/multipla-escolha/multipla-escolha.component';
import { VerdadeiroFalsoComponent } from './lista-tipos-questoes/verdadeiro-falso/verdadeiro-falso.component';
import { CaixasSelecaoComponent } from './lista-tipos-questoes/caixas-selecao/caixas-selecao.component';
import { QuestaoAbertaComponent } from './lista-tipos-questoes/questao-aberta/questao-aberta.component';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-step-questionario',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    ConfigQuizComponent,
    PreencherQuestaoComponent,
    TipoQuestaoComponent,
    FormsModule,
    ReactiveFormsModule,
    MultiplaEscolhaComponent,
    VerdadeiroFalsoComponent,
    CaixasSelecaoComponent,
    QuestaoAbertaComponent
  ],
  templateUrl: './step-questionario.component.html',
  styleUrl: './step-questionario.component.scss'
})
export class StepQuestionarioComponent {

  @Input() form!: FormGroup;
  @Output() finish = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }


  get questoes(): FormArray {
    return this.form.get('questoes') as FormArray;
  }

  addQuestao(event: any) {
    const questao = this.criarEstruturaQuestao(event.tipo);
    this.questoes.push(questao);
    this.atualizarTotalQuestoes();
  }

  removerQuestao(index: number) {
    this.questoes.removeAt(index);
    this.atualizarTotalQuestoes();
  }

  atualizarTotalQuestoes() {
    this.form.get('totalQuestao')?.setValue(this.questoes.length);
  }

  criarEstruturaQuestao(tipo: string): FormGroup {

    switch (tipo) {

      case 'MULTIPLA_ESCOLHA':
        return this.fb.group({
          tipo: ['MULTIPLA_ESCOLHA'],
          enunciado: [''],
          xp: [10],
          correta: [null],
          alternativas: this.fb.array([
            this.fb.group({ texto: [''] }),
            this.fb.group({ texto: [''] })
          ])
        });

      case 'VERDADEIRO_FALSO':
        return this.fb.group({
          tipo: ['VERDADEIRO_FALSO'],
          enunciado: [''],
          xp: [10],

          alternativas: this.fb.array([
            this.fb.group({
              texto: ['Verdadeiro'],
              valor: [true]
            }),
            this.fb.group({
              texto: ['Falso'],
              valor: [false]
            })
          ])
        });

      case 'QUESTAO_ABERTA':
        return this.fb.group({
          tipo: ['QUESTAO_ABERTA'],
          enunciado: [''],
          correta: [false],
          xp: [10],
          respostaEsperada: ['']
        });

      case 'CAIXAS_SELECAO':
        return this.fb.group({
          tipo: ['CAIXAS_SELECAO'],
          enunciado: [''],
          xp: [10],
          alternativas: this.fb.array([])
        });

      default:
        throw new Error('Tipo inválido');
    }
  }

  prevStep() {
    this.onPrev.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}