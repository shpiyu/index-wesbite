import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexDetailComponent } from './index-detail/index-detail.component';

const routes: Routes = [
  {
    path: ':ticker',
    component: IndexDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
