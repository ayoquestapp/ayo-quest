import { Component, Input } from '@angular/core';
import { Module } from '../../core/models/type';
import { ModulosComponent } from "../modulos/modulos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulos-stepper',
  standalone: true,
  imports: [CommonModule,ModulosComponent],
  templateUrl: './modulos-stepper.component.html',
  styleUrl: './modulos-stepper.component.scss'
})
export class ModulosStepperComponent {
  @Input() modulos: Module[] = [];

}
