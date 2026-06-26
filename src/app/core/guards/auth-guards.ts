import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isAuthenticated: CanActivateFn = async () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const profile = auth.currentProfile();

  if (!profile) {
    await auth.initAuth();
  }

  const updatedProfile = auth.currentProfile();

  if (!updatedProfile) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};