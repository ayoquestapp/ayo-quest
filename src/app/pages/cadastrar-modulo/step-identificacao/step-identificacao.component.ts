import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trilha } from '../../../core/models/type';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrilhasService } from '../../../core/services/trilhas.service';

@Component({
  selector: 'app-step-identificacao',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './step-identificacao.component.html',
  styleUrl: './step-identificacao.component.scss'
})
export class StepIdentificacaoComponent {
  @Output() onNext = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();
  @Input() form!: FormGroup;

  trilhas!: Trilha[];

  constructor(private trilhasService: TrilhasService) {

  }

  ngOnInit(): void {
    this.trilhasService.listar().subscribe(trilhas => {
      this.trilhas = trilhas;
    });
  }

  nextStep(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.onNext.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
