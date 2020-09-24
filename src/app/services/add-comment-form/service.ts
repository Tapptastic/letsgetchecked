import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddCommentFormService {
  constructor() {}

  postComment(postId, comment) {
    fetch(`http://localhost:9001/posts/${postId}/comments`, {
      method: 'POST',
      headers: [['Content-Type', 'Application/json']],
      body: JSON.stringify({
        ...comment,
        date: new Date().toLocaleDateString(),
      }),
    });
  }
}
