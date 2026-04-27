import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CardCursosComponent } from "../../../components/card-cursos/card-cursos.component";
import { CardStatusComponent } from '../../../components/card-status/card-status.component';
import { CommonModule } from '@angular/common';
import { Module, StatusCard } from '../../../core/models/type';
import { InfoModulosComponent } from '../../../components/info-modulos/info-modulos.component';
import { ModulosComponent } from "../../../components/modulos/modulos.component";
import { ModulosStepperComponent } from "../../../components/modulos-stepper/modulos-stepper.component";

@Component({
  selector: 'app-front-end',
  standalone: true,
  imports: [CommonModule, RouterLink, CardCursosComponent, CardStatusComponent, InfoModulosComponent, ModulosStepperComponent],
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.scss'
})
export class FrontEndComponent implements OnInit {

  user = {
    modulesCompleted: 3,
    xp: 450,
    level: 2,
    streak: 5
  };

  statusCards: StatusCard[] = [];

  ngOnInit(): void {
    this.statusCards = [
      {
        icon: 'pi-check',
        value: this.user.modulesCompleted,
        label: 'MÓDULOS CONCLUÍDOS',
        variant: 'success'
      },
      {
        icon: 'pi-bolt',
        value: this.user.xp,
        label: 'XP ACUMULADO',
        variant: 'success'
      },
      {
        icon: 'pi-star',
        value: this.user.level,
        label: 'NÍVEL ATUAL',
        variant: 'success'
      },
      {
        icon: 'pi-angle-double-up',
        value: `${this.user.streak} dias`,
        label: 'STREAK',
        variant: 'success'
      }
    ];
  }
  
  info = {
    tag: 'Front-end',
    label: 'TRILHA 1',
    modules: 12,
    tempoEstimado: '40 hrs',
    xp: 1200,
    streak: 5,
    title: 'Front-end: Construindo Interfaces Mágicas',
    description: 'Aprenda HTML, CSS, JavaScript e Angular para criar experiências visuais incríveis na web. Cada módulo libera novos poderes — siga o caminho até vencer o desafio!',
    image: '../../../assets/course-frontend.jpg',
    progresso: 30,
  }

  modules: Module[] = [
    {
      id: 1,
      title: 'Fundamentos da Web',
      description: 'Como a internet funciona, navegadores, HTTP e a anatomia de um site.',
      tags: ['Internet', 'HTTP', 'DNS', 'Navegadores'],
      duration: '2h 30min',
      lessons: 6,
      xp: 120,
      status: 'completed'
    },
    {
      id: 2,
      title: 'HTML5 e Semântica',
      description: 'Estrutura correta de documentos HTML e boas práticas de acessibilidade.',
      tags: ['HTML5', 'Semântica', 'Acessibilidade'],
      duration: '3h',
      lessons: 8,
      xp: 150,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'CSS3 e Layout',
      description: 'Estilos avançados com CSS3, Flexbox, Grid e responsividade.',
      tags: ['CSS3', 'Flexbox', 'Grid', 'Responsive'],
      duration: '4h',
      lessons: 10,
      xp: 200,
      status: 'pending'
    },
    {
      id: 4,
      title: 'JavaScript Essencial',
      description: 'Fundamentos de JavaScript, DOM manipulation e eventos.',
      tags: ['JavaScript', 'DOM', 'Events', 'ES6'],
      duration: '5h',
      lessons: 12,
      xp: 250,
      status: 'pending'
    }
  ];

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed':
        return 'pi-check';
      case 'in-progress':
        return 'pi-clock';
      default:
        return 'pi-circle';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'completed';
      case 'in-progress':
        return 'in-progress';
      default:
        return 'pending';
    }
  }
}


