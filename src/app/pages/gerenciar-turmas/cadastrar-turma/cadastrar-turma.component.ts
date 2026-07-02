import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { Trilha, Turma, TurmaCadastroDTO } from '../../../core/models/type';
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

  constructor(public loadingService: LoadingService, public turmaService: TurmasService, private fb: FormBuilder, private trilhaService: TrilhasService) {
    this.initForm()
   }

  ngOnInit(): void {
    this.getTrilhas();

    console.log('Turma recebida:', this.turma);

    if (this.turma) {
      this.preencherFormulario();
    }

  }

  private initForm() {
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
        trilhas: [[]]
      }),
    });
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
      trilhas: this.turma?.trilhasIds || []
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
    console.log('Iniciando processo de salvamento...');

    if (this.turmaForm.invalid) {
      console.log('❌ FORM INVÁLIDO', this.turmaForm.value);
      this.turmaForm.markAllAsTouched();
      return;
    }

    Object.keys(this.turmaForm.controls).forEach(key => {
      const control = this.turmaForm.get(key) as FormGroup;
      if (control.invalid) {
        Object.keys(control.controls).forEach(subKey => {
          const subControl = control.get(subKey);
          if (subControl?.invalid) {
            console.log(`Erro no campo: ${key} -> ${subKey}`, subControl.errors);
          }
        });
      }
    });

    const dto = {
      txNomeTurma: this.dadosBasicosForm.value.txNomeTurma,
      codTurma: this.dadosBasicosForm.value.codTurma,
      descricao: this.dadosBasicosForm.value.descricao,
      quantidadeAlunos: this.configuracoesForm.value.quantidadeAlunos,
      periodo: this.configuracoesForm.value.periodo,
      stTurma: this.configuracoesForm.value.stTurma,
      responsavel: this.responsavelForm.value.responsavel,
      alunos: this.configuracoesForm.value.alunos.map((email: string) => ({
        email
      })),
      trilhas: this.responsavelForm.value.trilhas
    };

    console.log('📦 DTO FINAL:', dto);

    this.onSave.emit(dto);
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
