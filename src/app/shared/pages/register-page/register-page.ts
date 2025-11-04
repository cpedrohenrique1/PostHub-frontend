import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import RegisterForm from '../../interfaces/registerForm.interface';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  userData: RegisterForm = {
    email: "",
    username: "",
    password: ""
  }

  onSubmit(){

  }
}
