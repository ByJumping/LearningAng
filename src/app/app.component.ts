import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'First post', text: 'This is post 1', id: 1},
    {title: 'Second post', text: 'This is post 2', id: 2},
    {title: 'Third post', text: 'This is post 3', id: 3},
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
}
