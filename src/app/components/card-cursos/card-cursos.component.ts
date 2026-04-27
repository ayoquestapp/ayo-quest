import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { Course } from '../../core/models/type';

@Component({
  selector: 'app-card-cursos',
  standalone: true,
  imports: [CommonModule,PrimeNgModule],
  templateUrl: './card-cursos.component.html',
  styleUrl: './card-cursos.component.scss'
})

export class CardCursosComponent {
  @Input() info!: Course;
  
}
