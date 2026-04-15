import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedIn: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const loggedIn = await authService.isLoggedIn();

  if (loggedIn) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};