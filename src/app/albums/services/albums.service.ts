import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../../shared/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getByUserId(userId: number): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>('http://localhost:8000/api/albums', {
      params: {
        userId: userId,
      }
    });
  }
}
