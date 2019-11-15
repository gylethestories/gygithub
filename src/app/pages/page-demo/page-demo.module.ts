import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDemoComponent } from './page-demo.component';
import { MPageComponent } from './../../components/manulife-components/m-page/m-page.component';
import { SharedModule } from './../../shared/shared.module';
import {PaginationComponent} from '../../components/manulife-components/pagination/pagination.component';
import {TabsModule} from 'ngx-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: PageDemoComponent
    }]),
    TabsModule.forRoot()
  ],
  declarations: [PageDemoComponent, MPageComponent, PaginationComponent],
  // exports: [MPageComponent]
})
export class PageDemoModule { }
