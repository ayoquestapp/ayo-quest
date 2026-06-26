import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeNgModule } from '../../../../core/primeNgModule';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-step-configuracao-turma',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './step-configuracao-turma.component.html',
  styleUrl: './step-configuracao-turma.component.scss'
})
export class StepConfiguracaoTurmaComponent implements OnInit {
  @Output() onNext = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();
  @Input() form!: FormGroup;


  constructor(private notificationService: NotificationService) { }
  periodos = [
    { label: 'Matutino', value: 'MATUTINO' },
    { label: 'Vespertino', value: 'VESPERTINO' },
    { label: 'Noturno', value: 'NOTURNO' }
  ];

  statusOptions = [
    { label: 'Ativa', value: 'ATIVA' },
    { label: 'Inativa', value: 'INATIVA' }
  ];

  emailInput: string = '';

  alunosForTable: { email: string }[] = [];

  ngOnInit() {
    this.updateAlunosForTable();

    this.alunos.valueChanges.subscribe(() => {
      this.updateAlunosForTable();
    });
  }

  adicionarEmail() {
    if (!this.emailInput || !this.emailInput.includes('@')) return;
    if(this.alunos.controls.some(control => control.value === this.emailInput)){
      this.notificationService.error('Erro ao adicionar email', 'Email já adicionado.', );
      return;
    }
    this.alunos.push(
      new FormControl(this.emailInput, Validators.email)
    );

    this.emailInput = '';
  }

  removerEmail(index: number) {
    this.alunos.removeAt(index);
  }

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

  get alunos(): FormArray {
    return this.form.get('alunos') as FormArray;
  }

  private updateAlunosForTable() {
    this.alunosForTable = this.alunos.controls.map(control => ({ email: control.value }));
  }
}