import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trilha } from '../models/type';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TrilhasService {

  private apiUrl = `https://ayo-quest-api.fly.dev/trilhas`;

  constructor(
    private http: HttpClient
  ) {}

  listar(): Observable<Trilha[]> {

    return this.http.get<Trilha[]>(
      `${this.apiUrl}/listar`
    );
  }

  cadastrar(trilha: Trilha): Observable<Trilha> {

    return this.http.post<Trilha>(
      `${this.apiUrl}/cadastrar`,
      trilha
    );
  }

  atualizar(id: number, trilha: Trilha): Observable<Trilha> {

    return this.http.put<Trilha>(
      `${this.apiUrl}/atualizar/${id}`,
      trilha
    );
  }

  remover(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/remover/${id}`
    );
  }
}