import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../core/primeNgModule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { SupabaseService } from '../../core/services/supabase.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  value: string | undefined;
  loginForm!: FormGroup
  loading: boolean = false;
  private notificationService = inject(NotificationService);

  constructor(
    private formBuilder: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router,
    private authService: AuthService

  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    this.load();

    const { email, password } = this.loginForm.value;

    const { data, error } = await this.supabaseService.login(email, password);

    this.loading = false;

    if (error) {
      this.notificationService.error('Erro ao fazer login', error.message);
      return;
    }

    this.notificationService.success('Login Realizado com sucesso.', 'SUCESSO')
    await this.authService.loadProfile();

    this.router.navigate(['/app']);

  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

}



