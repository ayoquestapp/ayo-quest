import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-step-responsavel',
  standalone: true,
  imports: [CommonModule, PrimeNgModule,ReactiveFormsModule, FormsModule],
  templateUrl: './step-responsavel.component.html',
  styleUrl: './step-responsavel.component.scss'
})
export class StepResponsavelComponent implements OnInit {
  
  @Output() onPrev = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
  @Input() form!: FormGroup;
  @Input() trilhas: any[] = [];

  ngOnInit(): void {
    console.log('trilhas', this.trilhas);
  }

  usuarios = [
    {
      id: '1',
      nome: 'Administrador'
    }
  ];

  voltar() {
    this.onPrev.emit();
  }

  finalizar() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.finish.emit();
  }

}
