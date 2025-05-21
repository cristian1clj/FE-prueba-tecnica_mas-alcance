import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:8000/api/posts');
  }
}
