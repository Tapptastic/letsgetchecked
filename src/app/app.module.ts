import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BlogComponent,
    PostOverviewComponent,
    CommentComponent,
    AddCommentFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
