import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeNgModule, CommonModule , RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: ObjectConstructor,

    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  sessaoAtiva: string | null = null;

  links = [
    { label: 'Sobre Nós', route: '/sobre-nos', id: 'sobre-nos'},
    { label: 'Atuação', route: '/atuacao', id: 'atuacao' },
    // { label: 'Nossa equipe', route: '/nossa-equipe', id: 'equipe' },
    // { label: 'Parceiros', route: '/parceiros' , id: 'parceiros' },
    { label: 'Perguntas Frequentes', id: 'perguntas-frequentes' },
  ];

  private scrollContainer!: HTMLElement;

  @HostListener('window:scroll', [])
  onScroll() {
    this.detectarSessao();
  }

  scrollPara(id: string): void {
    if (!this.isBrowser) return;

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  detectarSessao(): void {
    if (!this.isBrowser) return;

    const headerOffset = 120;
    let sessaoAtual: string | null = null;

    for (const link of this.links) {
      const section = document.getElementById(link.id);

      if (section) {
        const rect = section.getBoundingClientRect();

        // Verifica se a seção já passou do topo (com offset)
        if (rect.top <= headerOffset) {
          sessaoAtual = link.id;
        }
      }
    }

    this.sessaoAtiva = sessaoAtual;
  }

  get isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
}