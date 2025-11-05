import { inject, Injectable } from '@angular/core';
import RegisterFormInterface from '../interfaces/registerForm.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient);

  register(registerForm: RegisterFormInterface){
    return this.http.post("http://localhost:8080/users", registerForm);
  }
}
