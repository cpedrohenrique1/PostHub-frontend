import { inject, Injectable } from '@angular/core';
import RegisterFormInterface from '../interfaces/registerForm.interface';
import { HttpClient } from '@angular/common/http';
import LoginFormInterface from '../interfaces/loginForm.interface';
import TokenInterface from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient);
  url: string = "http://localhost:8080";

  register(registerForm: RegisterFormInterface){
    return this.http.post(`${this.url}/users`, registerForm);
  }

  login(loginForm: LoginFormInterface){
    return this.http.post<TokenInterface>(`${this.url}/login`, loginForm);
  }
}
