import { Routes } from '@angular/router';
import { LoginPage } from './shared/pages/login-page/login-page';
import { RegisterPage } from './shared/pages/register-page/register-page';
import { FeedPage } from './shared/pages/feed-page/feed-page';
import { ProfilePage } from './shared/pages/profile-page/profile-page';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
    {
        // autenticados
        path: "",
        canActivate: [authGuard],
        children: [
            {
                path: "",
                component: FeedPage
            },
            {
                path: "profile",
                component: ProfilePage
            }
        ]
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
    },

];
