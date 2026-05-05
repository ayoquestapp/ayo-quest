import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trilha } from '../../../core/models/type';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-identificacao',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './step-identificacao.component.html',
  styleUrl: './step-identificacao.component.scss'
})
export class StepIdentificacaoComponent implements OnInit {
  @Output() onNext = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();
  @Input() form!:FormGroup;

  tituloModulo: string = '';
  resumo: string = '';
  trilhaSelecionada: Trilha | undefined;
  trilhas: Trilha[] = [
    { name: 'Front-end', code: 'FE' },
    { name: 'Back-end', code: 'BE' },
    { name: 'Data-base', code: 'DB' },
  ];
  cargaHoraria: string = '';
  recompensaXP: number = 0;
  imagemCapa: string = '';

  ngOnInit(): void {
    if (this.trilhas.length > 0) {
      this.trilhaSelecionada = this.trilhas[0];
    }
  }

  nextStep(): void {
    console.log('Dados de Identificação:', { 
      tituloModulo: this.tituloModulo,
      resumo: this.resumo,
      trilhaSelecionada: this.trilhaSelecionada,
      cargaHoraria: this.cargaHoraria,
      recompensaXP: this.recompensaXP,
      imagemCapa: this.imagemCapa
    });
    this.onNext.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
