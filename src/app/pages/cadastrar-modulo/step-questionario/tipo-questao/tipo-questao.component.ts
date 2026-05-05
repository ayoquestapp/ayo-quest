import { Component, EventEmitter, Output } from '@angular/core';
import { Question, tipoQuestaoId } from '../../../../core/models/type';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-tipo-questao',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './tipo-questao.component.html',
  styleUrl: './tipo-questao.component.scss'
})
export class TipoQuestaoComponent {
  @Output() typeSelected = new EventEmitter<any>();

  questionTypes = [
    {
      id: 'MULTIPLA_ESCOLHA' as tipoQuestaoId,
      label: 'Múltipla escolha',
      description: 'Uma única resposta correta.',
      icon: 'pi-circle-fill'
    },
    {
      id: 'CAIXAS_SELECAO' as tipoQuestaoId,
      label: 'Caixas de seleção',
      description: 'Várias respostas corretas.',
      icon: 'pi-check-square'
    },
    {
      id: 'VERDADEIRO_FALSO' as tipoQuestaoId,
      label: 'Verdadeiro / Falso',
      description: 'Resposta binária.',
      icon: 'pi-sliders-h'
    },
    {
      id: 'QUESTAO_ABERTA' as tipoQuestaoId,
      label: 'Questão aberta',
      description: 'Resposta textual.',
      icon: 'pi-align-left'
    }
  ];

  onSelect(typeId: tipoQuestaoId) {
    this.typeSelected.emit({
      tipo: typeId
    });
  }

}
