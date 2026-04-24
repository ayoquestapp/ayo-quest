import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { TrilhasComponent } from '../../components/trilhas/trilhas.component';
import { BemVindoComponent } from "../../components/bem-vindo/bem-vindo.component";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, TrilhasComponent, BemVindoComponent, RouterLink],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  tracks = [
    {
      tag: 'Front-end',
      label: 'TRILHA 1',
      title: 'Front-end: Construindo Interfaces Mágicas',
      description:
        'Aprenda HTML, CSS, JavaScript e Angular para criar experiências visuais incríveis na web.',
      image: '../../../assets/course-frontend.jpg',
      progress: 30,
      router : 'front-end'
    },
    {
      tag: 'Back-end',
      label: 'TRILHA 2',
      title: 'Back-end: A Forja das APIs',
      description:
        'Domine Spring Boot, Java ,autenticação, APIs REST e arquitetura de servidores escaláveis.',
      image: '../../../assets/course-backend.jpg',
      progress: 50,
      router: 'back-end'
    },
    {
      tag: 'Banco de Dados',
      label: 'TRILHA 3',
      title: 'Banco de Dados: O Grimório dos Dados',
      description:
        'Modelagem, SQL, PostgreSQL, índices e otimização para guardar o conhecimento do reino.',
      image: '../../../assets/course-database.jpg',
      progress: 85,
      router: 'data-base'
    
    }
  ];
}