import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';

import { StepIdentificacaoComponent } from './step-identificacao/step-identificacao.component';
import { StepConteudoComponent } from "./step-conteudo/step-conteudo.component";
import { StepQuestionarioComponent } from "./step-questionario/step-questionario.component";
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ModuloPayload, TipoConteudo } from '../../core/models/type';
import { tick } from '@angular/core/testing';

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
export class CadastrarModuloComponent implements OnInit, OnChanges {
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
        trilha: ['', [Validators.required]],
        xpAoConcluir: ['', [Validators.required]],
        cargaHoraria: ['', [Validators.required]]
      }),
      conteudo: this.fb.group({
        videoAulaUrl: [''],
        conteudoAcademico: [''],
        valor: [''],
      }),
      questionario: this.fb.group({
        notaMinima: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        totalQuestao: ['', [Validators.required, Validators.min(1)]],
        questoes: this.fb.array([

        ])
      })
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modulo'] && this.modulo) {
      setTimeout(() => {
        this.resetarFormulario();
        this.carregarModulo(this.modulo);
      });
    }
  }

  resetarFormulario() {
    this.form.reset();
    this.questoes.clear();
  }

  cancelar() {
    this.onCancel.emit();
  }

  finalizar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('Formulário inválido');
      console.log('FORM COMPLETO:', this.form.getRawValue());
      return;
    }

    const v = this.form.value;

    const conteudos = [];

    if (v.conteudo.videoAulaUrl) {
      conteudos.push({
        tipo: TipoConteudo.VIDEO,
        valor: v.conteudo.videoAulaUrl,
        titulo: 'Vídeo aula'
      });
    }

    if (v.conteudo.conteudoAcademico) {
      conteudos.push({
        tipo: TipoConteudo.TEXTO,
        valor: v.conteudo.conteudoAcademico,
        titulo: 'Conteúdo acadêmico'
      });
    }
    console.log('TRILHA FORM:', v.identificacao.trilha);

    const payload: ModuloPayload = {
      nome: v.identificacao.nome,
      descricao: v.identificacao.descricao,
      xpAoConcluir: v.identificacao.xpAoConcluir,
      cargaHoraria: v.identificacao.cargaHoraria,
      trilha: {
        id: v.identificacao.trilha
      },

      conteudos: conteudos,

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
        descricao: modulo.descricao,
        trilha: modulo.trilha || '',
        xpAoConcluir: modulo.xpAoConcluir || ''
      },
      questionario: {
        notaMinima: this.questionarioForm.get('notaMinima')?.value || 70,
        totalQuestao: this.questionarioForm.get('totalQuestao')?.value || 1
      }
    });

    modulo.conteudos?.forEach((c: any) => {
      if (c.tipo === 'VIDEO') {
        this.form.get('conteudo.videoAulaUrl')?.setValue(c.valor);
      }

      if (c.tipo === 'TEXTO') {
        this.form.get('conteudo.conteudoAcademico')?.setValue(c.valor);
      }
    });

    modulo.questoes?.forEach((q: any) => {

      const alternativas = q.alternativas || [];

      const corretaIndex = alternativas.length > 0
        ? alternativas.findIndex((a: any) => a.correta)
        : null;

      const questao = this.fb.group({
        tipo: [q.tipo || 'MULTIPLA_ESCOLHA'], // fallback
        enunciado: [q.enunciado],
        xp: [q.xp],
        correta: [corretaIndex >= 0 ? corretaIndex : null],
        alternativas: this.fb.array(
          alternativas.map((a: any) =>
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

  get questoes() {
    return this.form.get('questionario.questoes') as FormArray;
  }
}