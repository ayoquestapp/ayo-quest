import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../core/primeNgModule';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config-quiz',
  standalone: true,
  imports: [CommonModule, PrimeNgModule , FormsModule],
  templateUrl: './config-quiz.component.html',
  styleUrl: './config-quiz.component.scss'
})
export class ConfigQuizComponent {

  notaMinima: number = 70;
  totalQuestoes: number = 1;

}
