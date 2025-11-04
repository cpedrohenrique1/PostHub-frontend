import { Component } from '@angular/core';
import { MainHeader } from "../../components/main-header/main-header";
import { PostComponent } from '../../components/post-component/post-component';
import PostComponentInterface from '../../interfaces/postComponent.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feed-page',
  imports: [MainHeader, PostComponent, FormsModule],
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
