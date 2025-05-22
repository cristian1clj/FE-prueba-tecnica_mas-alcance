import { Component } from '@angular/core';
import { IAlbum } from '../../../shared/models/album.model';
import { AlbumsService } from '../../services/albums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums!: IAlbum[];
  userId!: number;

  constructor(private albumsService: AlbumsService) {}

  search() {
    if (this.userId) {
      this.getAlbums(this.userId).subscribe({
        next: albums => {
          this.albums = albums;
        },
        error: e => console.error(e)
      });
    }
  }
  
  getAlbums(userId: number): Observable<IAlbum[]> {
    return this.albumsService.getByUserId(userId);
  }
}
