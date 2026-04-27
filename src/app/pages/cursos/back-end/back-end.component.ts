import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardCursosComponent } from '../../../components/card-cursos/card-cursos.component';
import { CardStatusComponent } from '../../../components/card-status/card-status.component';
import { InfoModulosComponent } from '../../../components/info-modulos/info-modulos.component';
import { ModulosStepperComponent } from '../../../components/modulos-stepper/modulos-stepper.component';
import { RouterLink } from '@angular/router';
import { Module, StatusCard } from '../../../core/models/type';

@Component({
  selector: 'app-back-end',
  standalone: true,
  imports: [CommonModule, CardCursosComponent, CardStatusComponent, InfoModulosComponent, ModulosStepperComponent, RouterLink],
  templateUrl: './back-end.component.html',
  styleUrl: './back-end.component.scss'
})
export class BackEndComponent {

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
    tag: 'Back-end',
    label: 'TRILHA 2',
    title: 'Back-end: A Forja das APIs',
    modules: 12,
    tempoEstimado: '40 hrs',
    xp: 1200,
    streak: 5,
    description:
      'Domine Spring Boot, Java ,autenticação, APIs REST e arquitetura de servidores escaláveis.',
    image: 'assets/course-backend.jpg',
    progresso: 10,
  }

  backendModules: Module[] = [
    {
      id: 1,
      title: 'Java e Spring Boot',
      description: 'Construindo APIs REST',
      tags: ['Java', 'Spring'],
      duration: '5h',
      lessons: 10,
      xp: 200,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Autenticação JWT',
      description: 'Segurança de APIs',
      tags: ['JWT'],
      duration: '3h',
      lessons: 6,
      xp: 150,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Banco de Dados',
      description: 'Modelagem e SQL',
      tags: ['SQL'],
      duration: '4h',
      lessons: 8,
      xp: 180,
      status: 'pending'
    }
  ];


}
