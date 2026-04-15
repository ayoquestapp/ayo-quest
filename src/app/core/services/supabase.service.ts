import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

@Injectable({
  providedIn: 'root'
})

export class SupabaseService {

  async register(email: string, senha: string, nome: string,) {
    return await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          nome: nome,
        }
      }
    });
  }

  async login(email: string, senha: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password: senha
    });
  }

  async getUser() {
    return await supabase.auth.getUser();
  }

  async getSession() {
    return await supabase.auth.getSession();
  }

  async logout() {
    return await supabase.auth.signOut();
  }

  onAuthChange(callback: any) {
    return supabase.auth.onAuthStateChange(callback);
  }

  async uploadAvatar(file: File, userId: string) {
    const filePath = `${userId}/avatar-${Date.now()}.png`;

    const { error } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true });

    if (error) throw error;

    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }

  async upsertConta(data: any) {
    const { error } = await supabase
      .from('conta_usuario')
      .upsert(data);

    if (error) throw error;
  }

  async getConta(userId: string) {
    const { data, error } = await supabase
      .from('conta_usuario')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    return data;
  }

}

