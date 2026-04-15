import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';

@Component({
  selector: 'app-verificar-email-template',
  standalone: true,
  imports: [CommonModule,PrimeNgModule],
  templateUrl: './verificar-email-template.component.html',
  styleUrl: './verificar-email-template.component.scss'
})
export class VerificarEmailTemplateComponent {

}
