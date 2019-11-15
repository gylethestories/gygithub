import { FormsModule } from '@angular/forms';
import { MCalendarComponent } from './../../components/manulife-components/m-calendar/m-calendar.component';
import { CalendarDemoComponent } from './calendar-demo.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';

const calendarDemoRoutes: Routes = [
  {
    path: '',
    component: CalendarDemoComponent
  }
];

@NgModule({
  declarations: [CalendarDemoComponent, MCalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(calendarDemoRoutes),
    TabsModule.forRoot()
  ]
})
export class CalendarDemoModule {}