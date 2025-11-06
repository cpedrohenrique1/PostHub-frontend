import { Component, inject, signal } from '@angular/core';
import { MainHeader } from "../../components/main-header/main-header";
import { PostComponent } from '../../components/post-component/post-component';
import { FormsModule } from '@angular/forms';
import PostComponentInterface from '../../interfaces/postComponent.interface';
import { FeedService } from '../../services/feed-service';
import SentPostInterface from '../../interfaces/sentPost.interface';

@Component({
  selector: 'app-feed-page',
  imports: [MainHeader, PostComponent, FormsModule],
  templateUrl: './feed-page.html',
  styleUrl: './feed-page.css',
})
export class FeedPage {
  sentPost: SentPostInterface = {
    content: ''
  };
  post: PostComponentInterface = {
    username: '',
    content: '',
    creationTimestamp: new Date()
  }
  feedService: FeedService = inject(FeedService);
  posts = signal<PostComponentInterface[]>([]);
  errorPosting: boolean = false;
  errorLoading: boolean = false;

  ngOnInit(){
    this.loadFeed();
  }

  loadFeed(){
    this.feedService.getFeed().subscribe({
      next: (data) => {
        data.feedItems = data.feedItems.map(item => {
          item.creationTimestamp = new Date(item.creationTimestamp);
          return item;
        })
        this.posts.set(data.feedItems);
      },
      error: () => {
        this.errorLoading = true;
      }
    });
  }

  MakePost(){
    this.feedService.post(this.sentPost).subscribe({
      next: () => {
        this.sentPost.content = '';
        this.loadFeed();
      },
      error: () => {
        this.errorPosting = true;
      }
    })
  }
}
