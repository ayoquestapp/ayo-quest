import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-conteudo',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule , ReactiveFormsModule],
  templateUrl: './step-conteudo.component.html',
  styleUrl: './step-conteudo.component.scss'
})
export class StepConteudoComponent {
  @Input() form!: FormGroup;
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  videoUrl: string = '';
  conteudo: string = '';
  

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
