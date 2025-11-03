import { Routes } from '@angular/router';
import { LoginPage } from './shared/pages/login-page/login-page';
import { RegisterPage } from './shared/pages/register-page/register-page';
import { FeedPage } from './shared/pages/feed-page/feed-page';

export const routes: Routes = [
    {
        path: "",
        component: FeedPage
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
    }
];
