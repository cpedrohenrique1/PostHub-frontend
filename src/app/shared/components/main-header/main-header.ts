import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { heroBars3 } from '@ng-icons/heroicons/outline'
import { heroHomeSolid, heroUserSolid } from '@ng-icons/heroicons/solid'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-header',
  imports: [NgIcon, RouterLink],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
  viewProviders: [provideIcons({heroBars3, heroHomeSolid, heroUserSolid})]
})
export class MainHeader {

}
