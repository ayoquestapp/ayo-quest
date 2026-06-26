import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-step-dados-basicos',
  standalone: true,
  imports: [CommonModule,PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './step-dados-basicos.component.html',
  styleUrl: './step-dados-basicos.component.scss'
})
export class StepDadosBasicosComponent {

  @Input() form!: FormGroup;

  @Output() onNext = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  nextStep() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.onNext.emit();
  }

  cancelar() {
    this.onCancel.emit();
  }
}