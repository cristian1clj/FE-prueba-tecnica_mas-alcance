import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { IPost } from '../../../shared/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() usernames = new Map<number, string>();
  @Output() close = new EventEmitter<void>();
  posts?: IPost[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClose() {
    this.close.emit();
  }

  getPosts(): Observable<IPost[]> {
    return this.postsService.getAll();
  }
}
