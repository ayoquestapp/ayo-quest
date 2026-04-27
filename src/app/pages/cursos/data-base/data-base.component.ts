import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { CardCursosComponent } from '../../../components/card-cursos/card-cursos.component';
import { CardStatusComponent } from '../../../components/card-status/card-status.component';
import { InfoModulosComponent } from '../../../components/info-modulos/info-modulos.component';
import { ModulosStepperComponent } from '../../../components/modulos-stepper/modulos-stepper.component';
import { ModulosComponent } from '../../../components/modulos/modulos.component';
import { RouterLink } from '@angular/router';
import { Module, StatusCard } from '../../../core/models/type';

@Component({
  selector: 'app-data-base',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, CardCursosComponent, CardStatusComponent, InfoModulosComponent, ModulosStepperComponent, RouterLink],
  templateUrl: './data-base.component.html',
  styleUrl: './data-base.component.scss'
})
export class DataBaseComponent {

  statusCards: StatusCard[] = [];

  info = {
    tag: 'Data-base',
    label: 'TRILHA 3',
    modules: 15,
    tempoEstimado: '60 hrs',
    xp: 1500,
    streak: 5,
    title: 'Data-base: Manipulando Dados com Eficiência',
    description:
      'Modelagem, SQL, PostgreSQL, índices e otimização para guardar o conhecimento do reino.',
    image: 'assets/course-database.jpg',
    progresso: 10,
  }

  databaseModules: Module[] = [
    {
      id: 1,
      title: 'Fundamentos de Banco de Dados',
      description: 'O que são bancos de dados, SGBDs, tabelas e relacionamentos.',
      tags: ['DB', 'SGBD', 'Modelagem'],
      duration: '2h',
      lessons: 5,
      xp: 100,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Modelagem de Dados',
      description: 'Entidades, atributos, relacionamentos e normalização.',
      tags: ['DER', 'Normalização'],
      duration: '3h',
      lessons: 7,
      xp: 140,
      status: 'completed'
    },
    {
      id: 3,
      title: 'SQL Básico',
      description: 'SELECT, INSERT, UPDATE, DELETE e filtros.',
      tags: ['SQL', 'CRUD'],
      duration: '4h',
      lessons: 10,
      xp: 180,
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'SQL Avançado',
      description: 'JOINs, subqueries, GROUP BY e funções agregadas.',
      tags: ['JOIN', 'GROUP BY'],
      duration: '4h',
      lessons: 9,
      xp: 200,
      status: 'pending'
    },
    {
      id: 5,
      title: 'Índices e Performance',
      description: 'Otimização de queries e uso de índices.',
      tags: ['Index', 'Performance'],
      duration: '3h',
      lessons: 6,
      xp: 150,
      status: 'pending'
    },
    {
      id: 6,
      title: 'NoSQL e MongoDB',
      description: 'Bancos não relacionais e modelagem em documentos.',
      tags: ['NoSQL', 'MongoDB'],
      duration: '3h',
      lessons: 7,
      xp: 170,
      status: 'pending'
    }
  ];

}
