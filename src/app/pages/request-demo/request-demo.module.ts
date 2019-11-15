import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RequestDemoComponent } from './request-demo.component';
const requestDemoRoutes: Routes = [
  {
    path: '',
    component: RequestDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(requestDemoRoutes)
  ],
  declarations: [RequestDemoComponent],
  exports: [RouterModule],
  providers: []
})
export class RequestDemoModule {}
