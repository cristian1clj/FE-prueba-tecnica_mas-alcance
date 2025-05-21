import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8000/api/users');
  }
}
