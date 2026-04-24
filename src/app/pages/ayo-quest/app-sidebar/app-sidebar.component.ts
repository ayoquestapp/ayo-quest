import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SupabaseService } from '../../../core/services/supabase.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../core/primeNgModule';

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
    private router: Router
  ) {

  }

  logout() {
    this.supabaseService.logout();
    this.router.navigate(['/login']);
  }
}
