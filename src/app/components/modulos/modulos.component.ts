import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

interface Module {
  id: number;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  lessons: number;
  xp: number;
  status: 'completed' | 'in-progress' | 'pending';
}

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, StepperModule, ButtonModule],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.scss'
})
export class ModulosComponent {
  @Input() module!: Module;
  @Input() index!: number;

  
}
