import { Injectable } from '@angular/core';
import { IPost } from 'src/models/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  getFeed(): Promise<IPost[]> {
    return fetch('http://localhost:9001/posts')
      .then((posts) => posts.json())
      .catch((error) => {
        // Check for errors
        throw new error();
      });
  }
}
