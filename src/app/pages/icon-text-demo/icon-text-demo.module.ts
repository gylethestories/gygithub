import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { IconTextDemoComponent } from './icon-text-demo.component';
import { MIconTextComponent } from '../../components/manulife-components/m-icon-text/m-icon-text.component';
import { MChips } from './../../components/manulife-components/m-chips/m-chips.component';

const iconTextDemoRoutes: Routes = [
  {
    path: '',
    component: IconTextDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    SharedModule,
    FormsModule,
    RouterModule.forChild(iconTextDemoRoutes)
  ],
  declarations: [IconTextDemoComponent, MIconTextComponent, MChips],
  exports: [RouterModule],
  providers: []
})
export class RequestDemoModule {}
