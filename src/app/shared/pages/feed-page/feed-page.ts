import { Component, inject, signal } from '@angular/core';
import { MainHeader } from "../../components/main-header/main-header";
import { PostComponent } from '../../components/post-component/post-component';
import { FormsModule } from '@angular/forms';
import PostComponentInterface from '../../interfaces/postComponent.interface';
import { FeedService } from '../../services/feed-service';
import SentPostInterface from '../../interfaces/sentPost.interface';
import FeedInfoInterface from '../../interfaces/feedInfo.interface';

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
  feedInfo: FeedInfoInterface = {
    feedItems: [],
    pageSize: 0,
    page: 0,
    totalElements: 0,
    totalPages: 0
  };
  feedService: FeedService = inject(FeedService);
  posts = signal<PostComponentInterface[]>([]);
  errorPosting: boolean = false;
  errorLoading: boolean = false;

  ngOnInit(){
    this.loadFeed();
  }

  loadFeed(){
    this.feedService.getFeed(0).subscribe({
      next: (data) => {
        data.feedItems = data.feedItems.map(item => {
          item.creationTimestamp = new Date(item.creationTimestamp);
          return item;
        })
        this.feedInfo = data;
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

  nextPage(){
    if (this.feedInfo.page + 1 >= this.feedInfo.totalPages) return;
    this.feedService.getFeed(this.feedInfo.page + 1).subscribe({
      next: (data) => {
        data.feedItems = data.feedItems.map(item => {
          item.creationTimestamp = new Date(item.creationTimestamp);
          return item;
        })
        this.feedInfo = data;
        this.posts.set(data.feedItems);
      },
      error: () => {
        this.errorLoading = true;
      }
    });
  }

  previousPage(){
    if (this.feedInfo.page <= 0) return;
    this.feedService.getFeed(this.feedInfo.page - 1).subscribe({
      next: (data) => {
        data.feedItems = data.feedItems.map(item => {
          item.creationTimestamp = new Date(item.creationTimestamp);
          return item;
        })
        this.feedInfo = data;
        this.posts.set(data.feedItems);
      },
      error: () => {
        this.errorLoading = true;
      }
    });
  }
}
