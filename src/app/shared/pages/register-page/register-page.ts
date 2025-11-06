import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import RegisterFormInterface from '../../interfaces/registerForm.interface';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  loginService: LoginService = inject(LoginService);
  router: Router = inject(Router);
  userData: RegisterFormInterface = {
    email: "",
    username: "",
    password: ""
  }
  loginError: boolean = false;

  onSubmit(){
    this.loginService.register(this.userData).subscribe({
      next:() => {
        this.router.navigateByUrl('/login');
      },
      error:()=> {
        this.loginError = true;
      }
    }
    );
  }
}
