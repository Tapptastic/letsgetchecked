import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog/post/:id', component: PostOverviewComponent },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
