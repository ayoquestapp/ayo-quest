import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../core/primeNgModule';
import { Notificacao } from '../../../../core/models/type';

@Component({
  selector: 'app-opcoes-notificacoes',
  standalone: true,
  imports: [CommonModule,PrimeNgModule],
  templateUrl: './opcoes-notificacoes.component.html',
  styleUrl: './opcoes-notificacoes.component.scss'
})
export class OpcoesNotificacoesComponent {

  notificacoes: Notificacao[] = [
    {
      id: 1,
      titulo: 'Novo módulo liberado',
      descricao: 'Angular Avançado está disponível.',
      icone: 'pi pi-bell'
    },
    {
      id: 2,
      titulo: 'Nova conquista',
      descricao: 'Você desbloqueou "Primeiro Passo".',
      icone: 'pi pi-trophy'
    },
    {
      id: 3,
      titulo: 'XP ganho',
      descricao: 'Você ganhou +120 XP hoje.',
      icone: 'pi pi-bolt'
    },
    {
      id: 4,
      titulo: 'Lembrete de estudo',
      descricao: 'Continue sua trilha Front-end.',
      icone: 'pi pi-clock'
    }
  ];

}
