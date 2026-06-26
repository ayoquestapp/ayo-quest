import { Injectable, signal } from '@angular/core';

import { SupabaseService } from './supabase.service';
import { Profile, User } from '../models/type';
import { UserService } from './user.service';
import { firstValueFrom } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private ready = false;
  currentProfile = signal<Profile | null>(null);

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService
  ) {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('profile');

      if (stored) {
        this.currentProfile.set(JSON.parse(stored));
      }
    }
  }

  isReady() {
    return this.ready;
  }

  async initAuth() {
    const { data } = await this.supabaseService.getSession();

    if (!data.session) {
      return;
    }

  }

  async loadProfile() {
    const profile = await firstValueFrom(
      this.userService.getMyProfile()
    );

    this.setProfile(profile);
  }

  setProfile(profile: Profile) {
    this.currentProfile.set(profile);

    if (typeof window !== 'undefined') {
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  }

  async logout() {
 
    this.currentProfile.set(null);

    localStorage.removeItem('profile');
    localStorage.removeItem('sb-access-token');
    localStorage.removeItem('sb-refresh-token');
    localStorage.removeItem('supabase.auth.token');
    sessionStorage.clear();

    await this.supabaseService.logout();

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