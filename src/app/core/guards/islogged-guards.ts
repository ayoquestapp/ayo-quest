import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isLoggedIn: CanActivateFn = async () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const profile = auth.currentProfile();

  if (!profile) {
    await auth.initAuth();
  }

  if (auth.currentProfile()) {
    router.navigate(['/app']);
    return false;
  }

  return true;
};