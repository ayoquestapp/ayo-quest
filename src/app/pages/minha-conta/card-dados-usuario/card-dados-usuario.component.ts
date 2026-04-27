import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';

@Component({
  selector: 'app-card-dados-usuario',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './card-dados-usuario.component.html',
  styleUrl: './card-dados-usuario.component.scss'
})
export class CardDadosUsuarioComponent {

}
