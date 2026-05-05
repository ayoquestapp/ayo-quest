import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../../../../core/primeNgModule';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-questao-aberta',
  standalone: true,
  imports: [CommonModule, PrimeNgModule , FormsModule, ReactiveFormsModule],
  templateUrl: './questao-aberta.component.html',
  styleUrl: './questao-aberta.component.scss'
})
export class QuestaoAbertaComponent {
  @Input() form!: FormGroup;
  @Input() index!: number;

  @Output() remove = new EventEmitter<void>();

  removeQuestion() {
    this.remove.emit();
  }
}