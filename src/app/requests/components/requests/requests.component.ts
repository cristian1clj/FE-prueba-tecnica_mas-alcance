import { Component } from '@angular/core';
import { IRequest } from '../../../shared/models/request.model';
import { RequestsService } from '../../services/requests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  requests!: IRequest[];
  editVisibility = false;
  deleteVisibility = false;
  requestSelected!: IRequest;
  requestDeleteId!: number;

  constructor(private requestService: RequestsService) {}

  ngOnInit(): void {
    console.log('asdasd')
    this.getRequests().subscribe(requests => {
      this.requests = requests;
    });
  }

  openEdit(request: IRequest): void {
    this.requestSelected = request;
    this.editVisibility = true;
  }
  
  openDelete(id: number): void {
    this.requestDeleteId = id;
    this.deleteVisibility = true;
  }

  hideEdit(): void {
    this.editVisibility = false;
    this.getRequests().subscribe(requests => {
      this.requests = requests;
    });
  }

  hideDelete(): void {
    this.deleteVisibility = false;
    this.getRequests().subscribe(requests => {
      this.requests = requests;
    });
  }

  getRequests(): Observable<IRequest[]> {
    return this.requestService.getAll();
  }
}
