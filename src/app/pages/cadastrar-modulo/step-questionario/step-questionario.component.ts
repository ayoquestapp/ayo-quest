import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { ConfigQuizComponent } from "./config-quiz/config-quiz.component";
import { PreencherQuestaoComponent } from "./preencher-questao/preencher-questao.component";
import { TipoQuestaoComponent } from "./tipo-questao/tipo-questao.component";
import { FormGroup, FormsModule } from '@angular/forms';
import { MultiplaEscolhaComponent } from './lista-tipos-questoes/multipla-escolha/multipla-escolha.component';

@Component({
  selector: 'app-step-questionario',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ConfigQuizComponent, PreencherQuestaoComponent, TipoQuestaoComponent, FormsModule , MultiplaEscolhaComponent],
  templateUrl: './step-questionario.component.html',
  styleUrl: './step-questionario.component.scss'
})
export class StepQuestionarioComponent {
  @Input() form!:FormGroup;
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  questoes: any[] = [];

  addQuestao(tipo: string) {
    const nova = this.criarEstruturaQuestao(tipo);
    this.questoes.push(nova);
  }

  removerQuestao(index: number) {
    this.questoes.splice(index, 1);
  }

  criarEstruturaQuestao(tipo: string) {
    switch (tipo) {
      case 'MULTIPLA_ESCOLHA':
        return {
          tipo: 'MULTIPLA_ESCOLHA',
          enunciado: '',
          xp: 10,
          correta: null,
          alternativas: [
            { texto: '' },
            { texto: '' }
          ]
        };

      case 'VERDADEIRO_FALSO':
        return {
          tipo: 'VERDADEIRO_FALSO',
          enunciado: '',
          xp: 10,
          resposta: true
        };

      case 'QUESTAO_ABERTA':
        return {
          tipo: 'QUESTAO_ABERTA',
          enunciado: '',
          xp: 10,
          respostaEsperada: ''
        };

       default:
      throw new Error('Tipo de questão inválido: ' + tipo);
    }
  }

  nextStep() {
    this.onNext.emit();
  }

  prevStep() {
    this.onPrev.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}
