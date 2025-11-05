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

  onSubmit(){
    this.loginService.register(this.userData).subscribe({
      next:(response) => {
        console.log(response);
        this.router.createUrlTree(['/']);
      },
      error:()=> {

      }
    }
    );
  }
}
