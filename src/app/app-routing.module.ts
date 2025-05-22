import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'requests', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule) },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
