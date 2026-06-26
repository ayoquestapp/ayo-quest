import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const roleGuard: CanActivateFn = (route) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const profile = auth.currentProfile();
  const roles = route.data['roles'] as string[];

  if (!profile) {
    router.navigate(['/login']);
    return false;
  }

  if (!roles.includes(profile.role)) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};