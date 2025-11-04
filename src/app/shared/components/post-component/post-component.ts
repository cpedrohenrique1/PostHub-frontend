import { Component, Input } from '@angular/core';
import PostComponentInterface from '../../interfaces/postComponent.interface';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {
  @Input() post: PostComponentInterface = {
    username: 'gente-do-ceu',
    content: 'Ola gente, primeiro post aqui!',
    time: '2 hours ago'
  };
  cores = ['indigo-700', 'amber-700', 'blue-700', 'cyan-700', 'emerald-700', 'fuchsia-700', 'gray-700', 'green-700', 'lime-700', 'neutral-700', 'orange-700', 'pink-700', 'purple-700', 'red-700', 'rose-700', 'sky-700', 'slate-700', 'stone-700', 'teal-700', 'violet-700', 'yellow-700', 'zinc-700'];
  
  coresWhite = ['indigo-200', 'amber-200', 'blue-200', 'cyan-200', 'emerald-200', 'fuchsia-200', 'gray-200', 'green-200', 'lime-200', 'neutral-200', 'orange-200', 'pink-200', 'purple-200', 'red-200', 'rose-200', 'sky-200', 'slate-200', 'stone-200', 'teal-200', 'violet-200', 'yellow-200', 'zinc-200'];
  
  randomColor: string = "";
  randomColorWhite: string = '';
  
  classes: string = '';
  ngOnInit() {
    this.randomColor = this.cores[Math.floor(Math.random() * this.randomColor.length)];
    this.randomColorWhite = this.coresWhite[Math.floor(Math.random() * this.randomColor.length)];

    this.classes = `bg-${this.randomColorWhite} dark:bg-${this.randomColor}`;
  }
}
