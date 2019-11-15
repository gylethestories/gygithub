import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperDemoComponent } from './swiper-demo.component';
import {TabsModule} from 'ngx-bootstrap';
const swiperDemoRoutes: Routes = [
  {
    path: '',
    component: SwiperDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(swiperDemoRoutes),
    TabsModule.forRoot()
  ],
  declarations: [SwiperDemoComponent],
  exports: [RouterModule],
  providers: []
})
export class SwiperDemoModule {}
