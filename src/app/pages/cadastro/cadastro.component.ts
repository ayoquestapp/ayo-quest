import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeNgModule } from '../../core/primeNgModule';
import { Router, RouterLink } from "@angular/router";
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { VerificarEmailTemplateComponent } from './verificar-email-template/verificar-email-template.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule, RouterLink, CadastroFormComponent, VerificarEmailTemplateComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  templateVerificarEmail : boolean = false; 
 
}

