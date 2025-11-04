import { Component } from '@angular/core';
import { MainHeader } from "../../components/main-header/main-header";
import { PostComponent } from '../../components/post-component/post-component';
import PostComponentInterface from '../../interfaces/postComponent.interface';

@Component({
  selector: 'app-feed-page',
  imports: [MainHeader, PostComponent],
  templateUrl: './feed-page.html',
  styleUrl: './feed-page.css',
})
export class FeedPage {
  post: PostComponentInterface = {
    username: 'texto',
    content: 'dasdsad',
    time: 'dasd'
  }
}
