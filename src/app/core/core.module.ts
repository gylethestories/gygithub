import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreComponent } from './core.component';
import { AuthGuard } from './auth.guard';
import { BaseInterceptor } from './interceptor';

@NgModule({
  imports: [CommonModule],
  exports: [CoreComponent],
  declarations: [CoreComponent],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }]
})
export class CoreModule {}
