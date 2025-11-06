import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import RegisterFormInterface from '../interfaces/registerForm.interface';
import { HttpClient } from '@angular/common/http';
import LoginFormInterface from '../interfaces/loginForm.interface';
import TokenInterface from '../interfaces/token.interface';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient);
  url: string = "http://localhost:8080";
  platformId = inject(PLATFORM_ID);
  router: Router = inject(Router);
  isBrowser = isPlatformBrowser(this.platformId);

  register(registerForm: RegisterFormInterface){
    return this.http.post(`${this.url}/users`, registerForm);
  }

  login(loginForm: LoginFormInterface){
    return this.http.post<TokenInterface>(`${this.url}/login`, loginForm);
  }

  logout(){
    if (!this.isBrowser){
      return;
    }
    const token = localStorage.getItem('token');
    if (token){
      localStorage.removeItem('token');
    }

    return this.router.navigateByUrl('/login');
  }
}
