import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../../../../core/primeNgModule';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verdadeiro-falso',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './verdadeiro-falso.component.html',
  styleUrl: './verdadeiro-falso.component.scss'
})
export class VerdadeiroFalsoComponent {

  @Input() form!: FormGroup;
  @Input() index!: number;
  @Output() remove = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  get alternativas(): FormArray {
    return this.form.get('alternativas') as FormArray;
  }

  addAlternativa() {
    this.alternativas.push(
      this.fb.group({
        texto: [''],
        correta: [false]
      })
    );
  }

  removeAlternativa(i: number) {
    this.alternativas.removeAt(i);
  }

  removeQuestion() {
    this.remove.emit();
  }
}
