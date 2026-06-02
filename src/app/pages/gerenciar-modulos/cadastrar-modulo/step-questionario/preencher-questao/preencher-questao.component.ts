import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { PrimeNgModule } from '../../../../../core/primeNgModule';

@Component({
  selector: 'app-preencher-questao',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './preencher-questao.component.html',
  styleUrl: './preencher-questao.component.scss'
})
export class PreencherQuestaoComponent implements OnInit {
  form!: FormGroup;
  @Input() model: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.model) {
      this.form = this.fb.group({
        enunciado: [this.model.enunciado],
        correta: [this.model.correta],
        xp: [this.model.xp],
        alternativas: this.fb.array(
          this.model.alternativas.map((alt: any) =>
            this.fb.group({
              texto: [alt.texto]
            })
          )
        )
      });
    } else {
      this.initForm();
    }
  }

  initForm() {
    this.form = this.fb.group({
      enunciado: ['', Validators.required],
      tipo: ['radio'],
      correta: [''],
      alternativas: this.fb.array([
        this.createAlternativa(''),
        this.createAlternativa('')
      ]),
      obrigatoria: [true],
      xp: [10]
    });
  }

  // Helper para criar o grupo de cada alternativa
  createAlternativa(texto: string = ''): FormGroup {
    return this.fb.group({
      texto: [texto, Validators.required],
      correta: [false]
    });
  }

  // Getter para facilitar o acesso às alternativas no HTML
  get alternativas() {
    return this.form.get('alternativas') as FormArray;
  }

  // Métodos para manipular as alternativas dinamicamente
  addAlternativa() {
    const label = ``;
    this.alternativas.push(this.createAlternativa(label));
  }

  removeAlternativa(index: number) {
    if (this.alternativas.length > 1) {
      this.alternativas.removeAt(index);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados do Formulário:', this.form.value);
    }
  }
}