import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { Trilha, Turma } from '../../../core/models/type';
import { LoadingService } from '../../../core/services/loading.service';
import { TurmasService } from '../../../core/services/turmas.service';

@Component({
  selector: 'app-cadastrar-turma',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cadastrar-turma.component.html',
  styleUrl: './cadastrar-turma.component.scss'
})
export class CadastrarTurmaComponent {

  @Input() turma: Turma | null = null;

  @Output() onSave = new EventEmitter<any>();

  @Output() onCancel = new EventEmitter<void>();

  turmaForm!: FormGroup;

  constructor(public loadingService: LoadingService, public turmaService: TurmasService) { }


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


}
