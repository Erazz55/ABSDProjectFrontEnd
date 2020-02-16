import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../models/login';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authentication(loginDTO: Login): Observable<any> {
    return this.http.post<any>('http://localhost:8080/absd/api/userAuthentication/authenticate', loginDTO);
  }

  registerUser(signUpDTO: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/absd/api/userAuthentication/register', signUpDTO);
  }

}
