import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
