import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { Trilha, Turma } from '../../../core/models/type';
import { LoadingService } from '../../../core/services/loading.service';
import { TurmasService } from '../../../core/services/turmas.service';
import { StepConfiguracaoTurmaComponent } from './step-configuracao-turma/step-configuracao-turma.component';
import { StepResponsavelComponent } from './step-responsavel/step-responsavel.component';
import { StepDadosBasicosComponent } from './step-dados-basicos/step-dados-basicos.component';
import { TrilhasService } from '../../../core/services/trilhas.service';

@Component({
  selector: 'app-cadastrar-turma',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule, StepConfiguracaoTurmaComponent, StepResponsavelComponent, StepDadosBasicosComponent],
  templateUrl: './cadastrar-turma.component.html',
  styleUrl: './cadastrar-turma.component.scss'
})
export class CadastrarTurmaComponent implements OnInit {
  activeStep: number = 0;
  trilhas: Trilha[] = [];

  @Input() turma: Turma | null = null;

  @Output() onSave = new EventEmitter<any>();

  @Output() onCancel = new EventEmitter<void>();

  turmaForm!: FormGroup;

  constructor(public loadingService: LoadingService, public turmaService: TurmasService, private fb: FormBuilder, private trilhaService: TrilhasService) { }

  ngOnInit(): void {
    this.getTrilhas();

    this.turmaForm = this.fb.group({
      dadosBasicosForm: this.fb.group({
        txNomeTurma: ['', Validators.required],
        codTurma: ['', Validators.required],
        descricao: ['']
      }),
      configuracoesForm: this.fb.group({
        quantidadeAlunos: [0, Validators.required],
        periodo: ['', Validators.required],
        stTurma: ['ATIVA'],
        alunos: this.fb.array([])
      }),
      responsavelForm: this.fb.group({
        responsavel: [null, Validators.required],
        trilhas: [[] as number[]]
      }),
    });

    if (this.turma) {
      this.preencherFormulario();
    }
  }

  preencherFormulario() {

    this.dadosBasicosForm.patchValue({
      txNomeTurma: this.turma?.txNomeTurma,
      codTurma: this.turma?.codTurma,
      descricao: this.turma?.descricao
    });

    this.configuracoesForm.patchValue({
      quantidadeAlunos: this.turma?.quantidadeAlunos,
      periodo: this.turma?.periodo,
      stTurma: this.turma?.stTurma
    });

    this.responsavelForm.patchValue({
      responsavel: this.turma?.responsavelId,
      trilhas: this.turma?.trilhasIds?.map((id) => ({ id })) || []
    });
  }

  campoInvalido(
    campo: string
  ): boolean {

    const control =
      this.turmaForm.get(campo);

    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }

  salvar() {

    if (this.turmaForm.invalid) {

      this.turmaForm.markAllAsTouched();

      return;
    }

    this.onSave.emit(
      this.turmaForm.value
    );
  }

  cancelar() {
    this.onCancel.emit();
  }

  getTrilhas() {
    this.trilhaService.listar().subscribe((trilhas) => {
      this.trilhas = trilhas;
    });
  }


  get dadosBasicosForm(): FormGroup {
    return this.turmaForm.get('dadosBasicosForm') as FormGroup;
  }
  get configuracoesForm(): FormGroup {
    return this.turmaForm.get('configuracoesForm') as FormGroup;
  }

  get responsavelForm(): FormGroup {
    return this.turmaForm.get('responsavelForm') as FormGroup;
  }

  get alunos() {
    return this.configuracoesForm.get('alunos') as FormArray;
  }
}
