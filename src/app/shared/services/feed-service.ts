import { inject, Injectable } from '@angular/core';
import PostComponentInterface from '../interfaces/postComponent.interface';
import { HttpClient } from '@angular/common/http';
import FeedInfoInterface from '../interfaces/feedInfo.interface';
import SentPostInterface from '../interfaces/sentPost.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  http: HttpClient = inject(HttpClient);
  url: string = "http://localhost:8080";

  post(dados: SentPostInterface){
    return this.http.post(`${this.url}/posts`, dados);
  }

  getFeed(){
    return this.http.get<FeedInfoInterface>(`${this.url}/feed`);
  }
}
