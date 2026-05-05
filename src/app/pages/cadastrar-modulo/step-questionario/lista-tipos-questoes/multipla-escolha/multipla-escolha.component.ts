import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNgModule } from '../../../../../core/primeNgModule';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-multipla-escolha',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './multipla-escolha.component.html',
  styleUrl: './multipla-escolha.component.scss'
})
export class MultiplaEscolhaComponent implements OnInit {
  @Input() model: any;
  @Input() index: number = 0;
  @Output() remove = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const data = this.model || { enunciado: '', correta: null, xp: 10, alternativas: [] };

    this.form = this.fb.group({
      enunciado: [data.enunciado, Validators.required],
      correta: [data.correta], 
      xp: [data.xp],
      alternativas: this.fb.array(
        (data.alternativas.length > 0 ? data.alternativas : [{ texto: '' }, { texto: '' }])
          .map((alt: any) => this.fb.group({
            texto: [alt.texto, Validators.required]
          }))
      )
    });
  }

  get alternativas(): FormArray {
    return this.form.get('alternativas') as FormArray;
  }

  addAlternativa() {
    this.alternativas.push(this.fb.group({
      texto: ['', Validators.required]
    }));
  }

  removeAlternativa(idx: number) {
    if (this.alternativas.length > 1) {
      this.alternativas.removeAt(idx);
      if (this.form.get('correta')?.value === idx) {
        this.form.get('correta')?.setValue(null);
      }
    }
  }

  removeQuestion() {
    this.remove.emit();
  }
}