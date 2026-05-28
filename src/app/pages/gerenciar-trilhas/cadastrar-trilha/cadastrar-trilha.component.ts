import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { PrimeNgModule } from '../../../core/primeNgModule';
import { StorageService } from '../../../core/services/storage.service';
import { TrilhasService } from '../../../core/services/trilhas.service';
import { Trilha } from '../../../core/models/type';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastrar-trilha',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  templateUrl: './cadastrar-trilha.component.html',
  styleUrl: './cadastrar-trilha.component.scss'
})
export class CadastrarTrilhaComponent
  implements OnInit, OnChanges {

  @Input() trilha: Trilha | null = null;

  @Output() onSave =
    new EventEmitter<any>();

  @Output() onCancel =
    new EventEmitter<void>();

  trilhaForm!: FormGroup;

  previewImagem: string | null = null;

  arquivoImagem!: File;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (
      changes['trilha'] &&
      this.trilhaForm &&
      this.trilha
    ) {

      this.previewImagem =
        this.trilha.imagem ?? null;

      this.trilhaForm.patchValue({
        nome: this.trilha.nome,
        code: this.trilha.code,
        descricao: this.trilha.descricao,
        imagem: this.trilha.imagem
      });

    }
  }

  criarFormulario() {

    this.trilhaForm =
      this.fb.group({

        nome: [
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],

        code: [
          '',
          [
            Validators.required,
            Validators.minLength(2)
          ]
        ],

        descricao: [
          '',
          [
            Validators.required,
            Validators.minLength(10)
          ]
        ],

        imagem: ['']

      });

    if (this.trilha) {

      this.previewImagem =
        this.trilha.imagem ?? null;

      this.trilhaForm.patchValue({
        nome: this.trilha.nome,
        code: this.trilha.code,
        descricao: this.trilha.descricao,
        imagem: this.trilha.imagem
      });

    }
  }

  async onImagemSelecionada(
    event: any
  ) {

    const file =
      event.files[0];

    if (!file) return;

    this.arquivoImagem = file;

    try {

      const imageUrl =
        await this.storageService
          .uploadTrailBanner(file);

      this.previewImagem =
        imageUrl;

      this.trilhaForm.patchValue({
        imagem: imageUrl
      });

    } catch (error) {

      console.error(
        'Erro ao enviar imagem:',
        error
      );

    }
  }

  salvar() {

    if (this.trilhaForm.invalid) {

      this.trilhaForm.markAllAsTouched();

      return;
    }

    this.onSave.emit(
      this.trilhaForm.value
    );
  }

  cancelar() {
    this.onCancel.emit();
  }

  campoInvalido(
    campo: string
  ): boolean {

    const control =
      this.trilhaForm.get(campo);

    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}