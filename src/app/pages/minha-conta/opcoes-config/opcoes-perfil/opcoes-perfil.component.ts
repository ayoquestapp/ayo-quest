import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../core/primeNgModule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-opcoes-perfil',
  standalone: true,
  imports: [CommonModule,PrimeNgModule, FormsModule , ReactiveFormsModule],
  templateUrl: './opcoes-perfil.component.html',
  styleUrl: './opcoes-perfil.component.scss'
})
export class OpcoesPerfilComponent {
  perfilForm!: FormGroup;

  constructor(private fb : FormBuilder) {
    this.perfilForm = this.fb.group({
      nomeExibicao: [''],
      nomeUsuario: [''],
      email: [''],
      localizacao: [''],
      bio: [''],
    });
  }
}
