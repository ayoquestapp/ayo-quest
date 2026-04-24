import { Component } from '@angular/core';
import { AppSidebarComponent } from "./app-sidebar/app-sidebar.component";
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrimeNgModule } from '../../core/primeNgModule';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-ayo-quest',
  standalone: true,
  imports: [AppSidebarComponent, PrimeNgModule , RouterOutlet , RouterLink, RouterLinkActive ],
  templateUrl: './ayo-quest.component.html',
  styleUrl: './ayo-quest.component.scss'
})
export class AyoQuestComponent {
  pageLabel = '';

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
}
