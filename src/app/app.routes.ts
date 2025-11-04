import { Routes } from '@angular/router';
import { LoginPage } from './shared/pages/login-page/login-page';
import { RegisterPage } from './shared/pages/register-page/register-page';
import { FeedPage } from './shared/pages/feed-page/feed-page';
import { ProfilePage } from './shared/pages/profile-page/profile-page';
import { loggedUserGuard } from './shared/guards/logged-user-guard';

export const routes: Routes = [
    {
        path: "",
        component: FeedPage,
        canActivate: [loggedUserGuard]
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
    },
    {
        path:"profile",
        component: ProfilePage,
        canActivate: [loggedUserGuard]
    }
];
