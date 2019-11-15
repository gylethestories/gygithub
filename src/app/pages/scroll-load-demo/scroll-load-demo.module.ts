import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MScrollLoadComponent } from './../../components/manulife-components/m-scroll-load/m-scroll-load.component';
import { ScrollLoadDemoComponent } from './scroll-load-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';

const Route: Routes = [
  {
    path: '',
    component: ScrollLoadDemoComponent
  }
];

@NgModule({
  declarations: [MScrollLoadComponent, ScrollLoadDemoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Route)
  ]
})
export class ScrollLoadDemoModule { }
