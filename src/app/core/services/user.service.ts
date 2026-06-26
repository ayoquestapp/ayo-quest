import { Injectable } from '@angular/core';
import { Profile } from '../models/type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

   getMyProfile() {
    return this.http.get<Profile>(
      `${environment.apiUrl}/api/profiles/me`
    );
  }
}
