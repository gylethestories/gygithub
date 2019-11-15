import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { RadioDemoComponent } from './radio-demo.component';

import { MRadioComponent } from '../../components/manulife-components/m-radio/m-radio.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

const RadioDemoRoutes: Routes = [
  {
    path: '',
    component: RadioDemoComponent
  }
];
@NgModule({
  declarations: [RadioDemoComponent, MRadioComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(RadioDemoRoutes),
    TabsModule.forRoot()
  ]
  // exports: [RouterModule]
})
export class RadioDemoModule {}
