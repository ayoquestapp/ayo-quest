import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  private API = 'http://localhost:8080/modulos';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API + '/listar');
  }

  salvar(modulo: any): Observable<any> {
    return this.http.post<any>(this.API + '/cadastrar', modulo);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/deletar/${id}`);
  }

  atualizar(id: number, modulo: any): Observable<any> {
    return this.http.put(`${this.API}/alterar/${id}`, modulo);
  }
}
