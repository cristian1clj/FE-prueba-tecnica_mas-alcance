import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RequestsComponent },
  ])],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
