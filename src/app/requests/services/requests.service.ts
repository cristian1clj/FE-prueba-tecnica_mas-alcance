import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequest } from '../../shared/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private url = 'http://localhost:8000/api/logs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(this.url);
  }

  update(requestMod: IRequest): Observable<IRequest> {
    return this.http.put<IRequest>(`${this.url}/${requestMod.id}`, requestMod);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.url}/${id}`);
  }
}
