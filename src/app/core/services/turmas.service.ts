import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodoDTO, Turma, Tutor } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  API_URL = `${environment.apiUrl}/turmas`;
  TUTORES = `${environment.apiUrl}/api/profiles`

  constructor(private http: HttpClient) { 

  }

  listar() : Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.API_URL}/listar`);
  }

  detalhar(id: number) {
    return this.http.get(`${this.API_URL}/detalhar/${id}`);
  }

  cadastrar(turma: any) {
    return this.http.post(`${this.API_URL}/cadastrar`, turma);
  }

  atualizar(id: number, turma: any) {
    return this.http.put(`${this.API_URL}/atualizar/${id}`, turma);
  }

  remover(id: number) {
    return this.http.delete(`${this.API_URL}/deletar/${id}`);
  }

  getTutores(): Observable<Tutor[]>{
    return this.http.get<Tutor[]>(`${this.TUTORES}/tutors`)
  }

  getPeriodos(): Observable<PeriodoDTO[]>{
    return this.http.get<PeriodoDTO[]>(`${this.API_URL}/periodos`)
   }

  

}
