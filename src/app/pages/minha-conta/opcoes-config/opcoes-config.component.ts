import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';

@Component({
  selector: 'app-opcoes-config',
  standalone: true,
  imports: [CommonModule , PrimeNgModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './opcoes-config.component.html',
  styleUrl: './opcoes-config.component.scss'
})
export class OpcoesConfigComponent {

}
