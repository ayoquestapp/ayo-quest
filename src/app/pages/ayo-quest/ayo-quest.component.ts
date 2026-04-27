import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSidebarComponent } from "./app-sidebar/app-sidebar.component";
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrimeNgModule } from '../../core/primeNgModule';
import { filter, map } from 'rxjs';
import { MegaMenuItem } from 'primeng/api';
import { CardMinhaContaComponent } from '../../components/card-minha-conta/card-minha-conta.component';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-ayo-quest',
  standalone: true,
  imports: [AppSidebarComponent, PrimeNgModule, RouterOutlet, CardMinhaContaComponent],
  templateUrl: './ayo-quest.component.html',
  styleUrl: './ayo-quest.component.scss'
})
export class AyoQuestComponent {
  @ViewChild('op') op!: OverlayPanel;

  pageLabel = '';
  accountData = {
    userName: 'Henrique Pineli',
    email: 'user@email.com',
    level: 4,
    xp: 1280,
    maxXp: 2000
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        map(route => route.snapshot.data)
      )
      .subscribe(data => {
        this.pageLabel = data['label'] || '';
      });
  }

  toggleMenu(event: Event) {
    this.op.toggle(event);

    setTimeout(() => {
      const el = this.op.container;

      if (el) {
        el.style.position = 'fixed';
        el.style.top = '50px';
        el.style.right = '5px';
        el.style.left = 'auto';
        el.style.transform = 'none';
      }
    });
  }
}
