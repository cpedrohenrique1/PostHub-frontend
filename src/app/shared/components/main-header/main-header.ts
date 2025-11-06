import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { heroBars3 } from '@ng-icons/heroicons/outline'
import { heroHomeSolid, heroUserSolid } from '@ng-icons/heroicons/solid'
import { RouterLink } from "@angular/router";
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-main-header',
  imports: [NgIcon, RouterLink],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
  viewProviders: [provideIcons({heroBars3, heroHomeSolid, heroUserSolid})]
})
export class MainHeader {
  loginService: LoginService = inject(LoginService);
  
  logout(){
    this.loginService.logout();
  }
}
