import { SharedModule } from './../../shared/shared.module';
import { MSelectComponent } from './../../components/manulife-components/m-select/m-select.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SelectDemoComponent } from './select-demo.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

const selectDemoRoutes: Routes = [
  {
    path: '',
    component: SelectDemoComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(selectDemoRoutes),
    TabsModule.forRoot()
  ],
  declarations: [SelectDemoComponent, MSelectComponent],
  exports: [RouterModule, MSelectComponent],
  providers: []
})
export class SelectDemoModule {}
