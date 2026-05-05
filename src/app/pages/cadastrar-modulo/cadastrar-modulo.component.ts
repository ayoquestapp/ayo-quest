import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';

import { StepIdentificacaoComponent } from './step-identificacao/step-identificacao.component';
import { StepConteudoComponent } from "./step-conteudo/step-conteudo.component";
import { StepQuestionarioComponent } from "./step-questionario/step-questionario.component";
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ModuloPayload } from '../../core/models/type';

@Component({
  selector: 'app-cadastrar-modulo',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    StepIdentificacaoComponent,
    StepConteudoComponent,
    StepQuestionarioComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar-modulo.component.html',
  styleUrl: './cadastrar-modulo.component.scss'
})
export class CadastrarModuloComponent {
  activeStep: number = 0;
  form!: FormGroup;
  @Output() onSave = new EventEmitter<ModuloPayload>();
  @Output() onCancel = new EventEmitter<void>();
  @Input() modulo: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      identificacao: this.fb.group({
        nome: ['', Validators.required],
        descricao: [''],
        categoria: ['FRONT-END'],
        status: ['PUBLICADO']
      }),
      conteudo: this.fb.group({
        aulas: this.fb.array([])
      }),
      questionario: this.fb.group({
        questoes: this.fb.array([])
      })
    });

    if (this.modulo) {
      this.carregarModulo(this.modulo);
    }
  }

  cancelar() {
    this.onCancel.emit();
  }

  finalizar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;

    const payload: ModuloPayload = {
      nome: v.identificacao.nome,
      descricao: v.identificacao.descricao,

      conteudos: v.conteudo.aulas?.map((a: any) => ({
        titulo: a.titulo || 'Aula',
        descricao: a.conteudo || ''
      })) || [],

      questoes: v.questionario.questoes?.map((q: any) => ({
        tipo: q.tipo,
        enunciado: q.enunciado,
        xp: q.xp,
        alternativas: q.alternativas?.map((alt: any, index: number) => ({
          texto: alt.texto,
          correta: q.correta === index
        }))
      })) || []
    };

    console.log('Payload BACKEND:', payload);

    this.onSave.emit(payload);
  }

  carregarModulo(modulo: any) {
    this.form.patchValue({
      identificacao: {
        nome: modulo.nome,
        descricao: modulo.descricao
      }
    });

    modulo.conteudos?.forEach((c: any) => {
      this.aulas.push(this.fb.group({
        titulo: [c.titulo],
        conteudo: [c.descricao]
      }));
    });

    modulo.questoes?.forEach((q: any) => {
      const questao = this.fb.group({
        tipo: [q.tipo],
        enunciado: [q.enunciado],
        xp: [q.xp],
        correta: [q.alternativas.findIndex((a: any) => a.correta)],
        alternativas: this.fb.array(
          q.alternativas.map((a: any) =>
            this.fb.group({
              texto: [a.texto]
            })
          )
        )
      });

      this.questoes.push(questao);
    });
  }

  get identificacaoForm(): FormGroup {
    return this.form.get('identificacao') as FormGroup;
  }

  get conteudoForm(): FormGroup {
    return this.form.get('conteudo') as FormGroup;
  }

  get questionarioForm(): FormGroup {
    return this.form.get('questionario') as FormGroup;
  }

  get aulas() {
    return this.form.get('conteudo.aulas') as FormArray;
  }

  get questoes() {
    return this.form.get('questionario.questoes') as FormArray;
  }
}