import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { SupabaseService } from './supabase.service';
import { UserService } from './user.service';
import { Profile } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ready = false;

  currentProfile = signal<Profile | null>(null);

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService
  ) {

    this.supabaseService.onAuthChange(async (event: any, session: any) => {

      console.log('[SUPABASE]', event);

      if (!session) {

        this.currentProfile.set(null);
        localStorage.removeItem('profile');

        this.ready = true;

        return;
      }

      try {

        const stored = localStorage.getItem('profile');

        if (stored) {
          this.currentProfile.set(JSON.parse(stored));
        } else {
          await this.loadProfile();
        }

      } catch {

        await this.loadProfile();

      }

      this.ready = true;

    });

  }

  isReady() {
    return this.ready;
  }

  async initAuth() {

    const { data } = await this.supabaseService.getSession();

    if (!data.session) {

      this.currentProfile.set(null);

      localStorage.removeItem('profile');

      this.ready = true;

      return;
    }

    const stored = localStorage.getItem('profile');

    if (stored) {

      this.currentProfile.set(JSON.parse(stored));

    } else {

      await this.loadProfile();

    }

    this.ready = true;
  }

  async loadProfile() {

    const profile = await firstValueFrom(
      this.userService.getMyProfile()
    );

    this.setProfile(profile);

  }

  setProfile(profile: Profile) {

    this.currentProfile.set(profile);

    localStorage.setItem(
      'profile',
      JSON.stringify(profile)
    );

  }

  async logout() {

    await this.supabaseService.logout();

    // Segurança caso o evento SIGNED_OUT demore
    this.currentProfile.set(null);

    localStorage.removeItem('profile');

    this.ready = false;

  }

  isAdmin() {
    return this.currentProfile()?.role === 'ADMIN';
  }

  isTutor() {
    return this.currentProfile()?.role === 'TUTOR';
  }

  isStudent() {
    return this.currentProfile()?.role === 'STUDENT';
  }

}