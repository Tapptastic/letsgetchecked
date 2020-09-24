import { Injectable } from '@angular/core';
import { IComment } from 'src/models/Comment';
import { IPost } from 'src/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostOverviewService {
  constructor() {}

  getPost(id): Promise<IPost> {
    return fetch(`http://localhost:9001/posts/${id}`)
      .then((post) => post.json())
      .catch((error) => {
        throw new error();
      });
  }

  getComments(postId): Promise<IComment[]> {
    return fetch(`http://localhost:9001/posts/${postId}/comments`)
      .then((comments) => comments.json())
      .catch((error) => error);
  }

  // O(n2)
  getChildComments(comments): IComment[] {
    const formattedComments = [];
    const processedComments = [];

    comments.map((comment: IComment) => {
      const tempComment = { ...comment };
      tempComment.children = [];
      tempComment.count = 1;

      const beenProcessed = processedComments.indexOf(comment) !== -1;

      if (!beenProcessed) {
        comments.map((comment1: IComment) => {
          const isChild = tempComment.id === comment1.parent_id;

          if (isChild) {
            tempComment.children.push(comment1);
            tempComment.count++;
            processedComments.push(comment1);
          }
        });

        formattedComments.push(tempComment);
        processedComments.push(comment);
      }
    });

    return formattedComments;
  }
}
