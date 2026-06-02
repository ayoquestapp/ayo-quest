import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  API_URL = `${environment.apiUrl}/turmas `;

  constructor(private http: HttpClient) { 

  }

  listar() {
    return this.http.get(`${this.API_URL}/listar`);
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
  

}
