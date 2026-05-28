import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private readonly bucket = 'images-server';
  private readonly maxSize = 5 * 1024 * 1024;

  constructor(
    private supabase: SupabaseService
  ) { }

  async uploadTrailBanner(
    file: File
  ): Promise<string> {

    if (!file.type.startsWith('image/')) {
      throw new Error('Arquivo inválido');
    }

    if (file.size > this.maxSize) {
      throw new Error('Arquivo muito grande');
    }

    const fileName =
      `${crypto.randomUUID()}-${file.name}`;

    const filePath = `trails/${fileName}`;

    const { error } =
      await this.supabase.client.storage
        .from(this.bucket)
        .upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data } =
      this.supabase.client.storage
        .from(this.bucket)
        .getPublicUrl(filePath);

    return data.publicUrl;
  }
}