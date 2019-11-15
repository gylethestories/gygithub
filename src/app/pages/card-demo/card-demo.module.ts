import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { CardDemoComponent } from './card-demo.component';

import { MCardComponent } from '../../components/manulife-components/m-card/m-card.component';
import { TabsModule } from 'ngx-bootstrap';

const cardDemoRoutes: Routes = [
  {
    path: '',
    component: CardDemoComponent
  }
];
@NgModule({
  declarations: [CardDemoComponent, MCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(cardDemoRoutes),
    TabsModule.forRoot()
  ],
  exports: [RouterModule]
})
export class CardDemoModule {}
