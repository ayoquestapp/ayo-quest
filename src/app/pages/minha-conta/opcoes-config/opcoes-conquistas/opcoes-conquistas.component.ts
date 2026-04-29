import { Component } from '@angular/core';
import { Conquista } from '../../../../core/models/type';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-opcoes-conquistas',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './opcoes-conquistas.component.html',
  styleUrl: './opcoes-conquistas.component.scss'
})
export class OpcoesConquistasComponent {

  conquistas: Conquista[] = [
    {
      titulo: 'Primeiro Passo',
      descricao: 'Concluiu seu primeiro módulo de estudo com sucesso.',
      icone: 'pi pi-star-fill',
      desbloqueada: true
    },
    {
      titulo: 'Em Chamas',
      descricao: '7 dias seguidos de estudo na plataforma.',
      icone: 'pi pi-bolt',
      desbloqueada: true
    },
    {
      titulo: 'Consistência',
      descricao: '30 dias consecutivos de estudo.',
      icone: 'pi pi-calendar',
      desbloqueada: false
    },
    {
      titulo: 'Mestre do HTML',
      descricao: 'Conclua todos os módulos de HTML.',
      icone: 'pi pi-code',
      desbloqueada: false
    },
    {
      titulo: 'Mago do CSS',
      descricao: '100% nos desafios de CSS.',
      icone: 'pi pi-palette',
      desbloqueada: false
    },
    {
      titulo: 'JavaScript Ninja',
      descricao: 'Finalize a trilha completa de JS.',
      icone: 'pi pi-bolt',
      desbloqueada: false
    },
    {
      titulo: 'Full Stack',
      descricao: 'Complete front + back-end.',
      icone: 'pi pi-cog',
      desbloqueada: false
    },
    {
      titulo: 'Explorador',
      descricao: 'Acesse todas as trilhas disponíveis.',
      icone: 'pi pi-compass',
      desbloqueada: true
    }
  ];

}