import { Routes } from '@angular/router';
import { LoginPage } from './shared/pages/login-page/login-page';
import { RegisterPage } from './shared/pages/register-page/register-page';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
    }
];
