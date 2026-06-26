import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SupabaseService } from '../../../core/services/supabase.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../core/primeNgModule';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-app-sidebar',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, RouterLink, RouterLinkActive],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent {
  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private authService: AuthService
  ) {

  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}
