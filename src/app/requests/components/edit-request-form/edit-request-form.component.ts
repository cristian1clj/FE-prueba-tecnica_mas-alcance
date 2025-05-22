import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { IRequest } from '../../../shared/models/request.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-request-form',
  templateUrl: './edit-request-form.component.html',
  styleUrl: './edit-request-form.component.css'
})
export class EditRequestFormComponent {
  @Input() request!: IRequest;
  @Output() close = new EventEmitter<void>();

  requestForm!: FormGroup;

  constructor(
    private requestsService: RequestsService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.generateEditRequestForm();
  }

  generateEditRequestForm(): void {
    this.requestForm = this.formBuilder.group({
      method: [this.request?.method],
      response: [this.request?.response],
    });
  }

  onClose() {
    this.close.emit();
  }

  editRequest() {
    const requestFormValues = this.requestForm.value;
    const req = {
      id: this.request?.id ?? 0,
      method: requestFormValues.method,
      response: requestFormValues.response,
      created_at: this.request.created_at,
      updated_at: this.request.updated_at,
    }
    this.updateRequest(req).subscribe(() => {
      this.onClose();
    });
  }

  updateRequest(request: IRequest): Observable<IRequest> {
    return this.requestsService.update(request);
  }
}
