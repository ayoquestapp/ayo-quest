import { Component } from '@angular/core';
import { FavoriteItem } from '../../../../core/models/type';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../core/primeNgModule';

@Component({
  selector: 'app-opcoes-favoritos',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './opcoes-favoritos.component.html',
  styleUrl: './opcoes-favoritos.component.scss'
})
export class OpcoesFavoritosComponent {

   favoritos: FavoriteItem[] = [
    {
      id: 1,
      titulo: 'Front-end Mágico',
      descricao: 'Do HTML ao boss final do React',
      tipo: 'Trilha',
      progresso: 62,
      tempo: '24h',
      xp: 1280,
      tag: 'Front-end',
      icone: 'pi pi-sparkles',
      corBanner: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)'
    },
    {
      id: 2,
      titulo: 'Angular: O Guia Definitivo',
      descricao: 'Aprenda profundamente sobre o framework Angular',
      tipo: 'Módulo',
      progresso: 35,
      tempo: '3h',
      xp: 320,
      tag: 'Angular',
      icone: 'pi pi-bolt',
      corBanner: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)'
    },
    {
      id: 3,
      titulo: 'Dominando CSS Grid',
      descricao: 'Layouts modernos e responsivos',
      tipo: 'Módulo',
      progresso: 80,
      tempo: '5h',
      xp: 540,
      tag: 'CSS',
      icone: 'pi pi-palette',
      corBanner: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)'
    }
  ];

  get hasFavorites(): boolean {
    return this.favoritos.length > 0;
  }

  get totalXP(): number {
    return this.favoritos.reduce((acc, f) => acc + f.xp, 0);
  }

  get totalHoras(): number {
    return this.favoritos.reduce((acc, f) => acc + parseInt(f.tempo), 0);
  }

  get totalTrilhas(): number {
    return this.favoritos.filter(f => f.tipo === 'Trilha').length;
  }

  toggleFavorito(id: number) {
    this.favoritos = this.favoritos.filter(f => f.id !== id);
  }
}