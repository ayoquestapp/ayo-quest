import { Injectable, signal } from '@angular/core';

import { SupabaseService } from './supabase.service';
import { User } from '../models/type';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);
  userRole = signal<string | null>(null);

  constructor(private supabaseService: SupabaseService) {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.currentUser.set(user);
        this.userRole.set(user.role);
      }
    }
  }

  setUser(user: any) {
    this.currentUser.set(user);
    this.userRole.set(user.role);

    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  async isLoggedIn(): Promise<boolean> {
    const { data } = await this.supabaseService.getSession();

    if (data.session) {
      this.currentUser.set(data.session.user as unknown as User);
      if (typeof window !== 'undefined') {
        this.userRole.set((data.session.user as any).role);
      }
      return true;
    }

    return false;
  }

  async load() {
    const { data } = await this.supabaseService.getSession();

    if (data.session) {
      this.currentUser.set(data.session.user as unknown as User);
      if (typeof window !== 'undefined') {
        this.userRole.set((data.session.user as any).role);
      }
    }
  }
}