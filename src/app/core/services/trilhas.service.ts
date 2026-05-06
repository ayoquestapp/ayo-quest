import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trilha } from '../models/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrilhasService {

  API = 'http://localhost:8080/trilhas';


  constructor(private http : HttpClient) { }

  listar() : Observable<Trilha []> {
    return this.http.get<Trilha[]>(this.API + '/listar');
  }


}
