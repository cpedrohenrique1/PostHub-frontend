import { Component, Input } from '@angular/core';
import PostComponentInterface from '../../interfaces/postComponent.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-post-component',
  imports: [NgClass],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {
  @Input() post: PostComponentInterface = {
    username: 'gente-do-ceu',
    content: 'Ola gente, primeiro post aqui!',
    time: '2 hours ago'
  };

  cores: string[] = ['bg-indigo-200 dark:bg-indigo-700', 'bg-amber-200 dark:bg-amber-700', 'bg-blue-200 dark:bg-blue-700', 'bg-cyan-200 dark:bg-cyan-700', 'bg-emerald-200 dark:bg-emerald-700', 'bg-fuchsia-200 dark:bg-fuchsia-700', 'bg-gray-200 dark:bg-gray-700', 'bg-green-200 dark:bg-green-700', 'bg-lime-200 dark:bg-lime-700', 'bg-neutral-200 dark:bg-neutral-700', 'bg-orange-200 dark:bg-orange-700', 'bg-pink-200 dark:bg-pink-700', 'bg-purple-200 dark:bg-purple-700', 'bg-red-200 dark:bg-red-700', 'bg-rose-200 dark:bg-rose-700', 'bg-sky-200 dark:bg-sky-700', 'bg-slate-200 dark:bg-slate-700', 'bg-stone-200 dark:bg-stone-700', 'bg-teal-200 dark:bg-teal-700', 'bg-violet-200 dark:bg-violet-700', 'bg-yellow-200 dark:bg-yellow-700', 'bg-zinc-200 dark:bg-zinc-700'];

  randomColor: string = "";

  ngOnInit() {
    this.randomColor = this.cores[Math.floor(Math.random() * this.cores.length)];
  }
}
