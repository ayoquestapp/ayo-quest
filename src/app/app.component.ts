import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SupabaseService } from './core/services/supabase.service';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent , CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ayo-quest';
  isHomePage = false;
  isLogged = false;

  constructor(private router: Router, private supabaseService: SupabaseService) { }

  async ngOnInit() {
    const { data } = await this.supabaseService.getSession();
    this.isLogged = !!data.session;

    this.supabaseService.onAuthChange((event: AuthChangeEvent, session: Session | null) => {
      this.isLogged = !!session;
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = this.router.url.includes('/home');
      });
  }
}
