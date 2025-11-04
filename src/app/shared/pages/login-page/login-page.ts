import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms'
import LoginFormInterface from '../../interfaces/loginForm.interface';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  router: Router = inject(Router);
  userData: LoginFormInterface = {
    username: "",
    password: ""
  };

  onSubmit(){
    return this.router.navigateByUrl('/');
  }
}
