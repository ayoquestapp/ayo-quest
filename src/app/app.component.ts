import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'ayo-quest';

  isHomePage = false;
  showHeader = true;

  constructor(private router: Router) {}

  ngOnInit() {

    // Executa na inicialização
    this.updateLayout(this.router.url);

    // Atualiza sempre que navegar
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateLayout(this.router.url);
      });

  }

  private updateLayout(url: string): void {

    this.isHomePage = url.includes('/home');

    // Esconde o header e footer apenas nas rotas privadas
    this.showHeader = !url.startsWith('/app');

  }

}