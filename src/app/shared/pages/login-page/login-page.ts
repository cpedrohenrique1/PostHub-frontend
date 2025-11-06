import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms'
import LoginFormInterface from '../../interfaces/loginForm.interface';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  router: Router = inject(Router);
  loginService: LoginService = inject(LoginService);
  loginError: boolean = false;
  userData: LoginFormInterface = {
    username: "",
    password: ""
  };

  onSubmit(){
    this.loginService.login(this.userData).subscribe({
      next:(response) => {
        localStorage.setItem('token', response.accessToken);
        this.router.navigateByUrl('/');
      },
      error:()=> {
        this.loginError = true;
      }
    });
  }
}
