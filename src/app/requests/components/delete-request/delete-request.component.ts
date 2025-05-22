import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrl: './delete-request.component.css'
})
export class DeleteRequestComponent {
  @Input() requestId!: number;
  @Output() close = new EventEmitter<void>();

  constructor(private requestsService: RequestsService) {}

  onClose() {
    this.close.emit();
  }

  confirmDeleteRequest() {
    this.deleteRequest(this.requestId).subscribe(() => {
      this.onClose();
    });
  }

  deleteRequest(id: number): Observable<{ message: string }> {
    return this.requestsService.delete(id);
  }
}
