import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiSelectDemoComponent } from './multi-select-demo.component';
import { MMultiSelectComponent } from './../../components/manulife-components/m-multi-select/m-multi-select.component';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: MultiSelectDemoComponent
    }]),
  ],
  declarations: [MultiSelectDemoComponent, MMultiSelectComponent]
})
export class MultiSelectDemoModule { }
