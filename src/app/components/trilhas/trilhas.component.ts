import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trilhas',
  standalone: true,
  imports: [CommonModule, PrimeNgModule , RouterLink],
  templateUrl: './trilhas.component.html',
  styleUrl: './trilhas.component.scss'
})
export class TrilhasComponent {
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() tag!: string;
  @Input() imagem!: string;
  @Input() hover: boolean = false;
  @Input() bloqueado: boolean = false;
  @Input() value: number = 30;

}
