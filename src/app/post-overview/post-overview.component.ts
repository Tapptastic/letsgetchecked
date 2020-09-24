import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IComment } from 'src/models/Comment';
import { IPost } from 'src/models/Post';
import { PostOverviewService } from '../services/post-overview/service';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss'],
})
export class PostOverviewComponent implements OnInit {
  id: number;
  post: IPost;
  comments: IComment[];
  commentCount: number = 0;
  is_loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postOverviewService: PostOverviewService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);

    this.postOverviewService.getPost(this.id).then((post) => {
      this.post = post;
    });

    this.postOverviewService.getComments(this.id).then((comments) => {
      this.is_loading = true;
      this.comments = this.postOverviewService.getChildComments(comments);

      this.comments.map((comment) => {
        this.commentCount += comment.count;
      });
    });
  }
}
