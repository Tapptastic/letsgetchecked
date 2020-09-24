import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/models/Post';
import { BlogService } from '../services/blog/service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  feed: IPost[];
  is_loading: boolean = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed(): void {
    this.blogService.getFeed().then((posts) => {
      this.is_loading = true;
      this.feed = posts
        .map((post) => {
          post.slug = post.slug.replace(/-/g, '/');
          return post;
        })
        .sort(
          (a, b) =>
            new Date(b.publish_date).getTime() -
            new Date(a.publish_date).getTime()
        );
    });
  }
}
