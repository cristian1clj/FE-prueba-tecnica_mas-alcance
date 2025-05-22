import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsComponent } from './components/requests/requests.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { EditRequestFormComponent } from './components/edit-request-form/edit-request-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';


@NgModule({
  declarations: [
    RequestsComponent,
    EditRequestFormComponent,
    DeleteRequestComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RequestsModule { }
