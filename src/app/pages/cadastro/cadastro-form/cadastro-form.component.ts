import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { NotificationService } from '../../../core/services/notification.service';
import { SupabaseService } from '../../../core/services/supabase.service';
import { RouterLink } from '@angular/router';
import { FormValidations } from '../../../core/validations/password-validations';
import { fadeInUp, invalidFlash } from '../../../core/animations';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule, RouterLink],
  animations: [fadeInUp, invalidFlash],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.scss'
})
export class CadastroFormComponent implements OnInit {
  cadastroForm: FormGroup;
  usuarios!: any[];
  flashState: { [key: string]: string } = {};

  @Output() cadastroSucesso = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private supabaseService: SupabaseService,
    private notificationService: NotificationService
  ) {
    this.cadastroForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required, Validators.minLength(6)]],
        // tipoUsuario: [null, [Validators.required]],
      },
      {
        validators: FormValidations.senhasIguaisValidator
      }
    );
  }

  ngOnInit(): void {
    this.usuarios = [
      { label: 'Estudante', value: 'ESTUDANTE' },
      { label: 'Tutor (somente professores)', value: 'TUTOR' },
      { label: 'Colaborador UniSER', value: 'COLABORADOR' }
    ];
  }

  isFieldTouchedOrDirty(field: string): boolean {
    const control = this.cadastroForm.get(field);
    return !!control && (control.touched || control.dirty);
  }

  hasFieldError(field: string, errorKey: string): boolean {
    const control = this.cadastroForm.get(field);
    if (!control) return false;
    return !!control.hasError(errorKey) && this.isFieldTouchedOrDirty(field);
  }

  hasPasswordMismatch(): boolean {
    const control = this.cadastroForm.get('confirmarSenha');
    if (!control) return false;

    return !!this.cadastroForm.hasError('senhasDiferentes') && (control.touched || control.dirty);
  }

  isInvalidField(field: string): boolean {
    const control = this.cadastroForm.get(field);
    if (!control) return false;

    const controlInvalid = control.invalid && (control.touched || control.dirty);

    const senhaMismatch =
      field === 'confirmarSenha' &&
      this.cadastroForm.hasError('senhasDiferentes') &&
      (control.touched || control.dirty);

    return controlInvalid || senhaMismatch;
  }

  showErrorMessage(field: string): boolean {
    if (field === 'confirmarSenha') {
      return this.isInvalidField(field);
    }

    const control = this.cadastroForm.get(field);
    if (!control) return false;

    return control.invalid && (control.touched || control.dirty);
  }

  triggerFlash(field: string): void {
    this.flashState[field] = 'flash';

    setTimeout(() => {
      this.flashState[field] = '';
    }, 600);
  }

  async onSubmit(): Promise<void> {
    if (this.cadastroForm.invalid) {
      Object.keys(this.cadastroForm.controls).forEach(field => {
        const control = this.cadastroForm.get(field);

        control?.markAsTouched();
        control?.markAsDirty();

        if (control?.invalid) {
          this.triggerFlash(field);
        }
      });

      if (this.cadastroForm.hasError('senhasDiferentes')) {
        this.triggerFlash('confirmarSenha');
      }

      return;
    }

    const { email, senha, nome } = this.cadastroForm.value;

    const { error } = await this.supabaseService.register(
      email,
      senha,
      nome
    );

    if (error) {
      console.error('Erro ao cadastrar:', error.message);
      this.notificationService.error('Erro ao cadastrar', error.message);
      return;
    }

    this.notificationService.success(
      'Cadastro realizado com sucesso!',
      'Verifique seu email.'
    );

    this.cadastroSucesso.emit();
  }
}