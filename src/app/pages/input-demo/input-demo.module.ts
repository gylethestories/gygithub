import { FormsModule } from '@angular/forms';
import { MInputComponent } from './../../components/manulife-components/m-input/m-input.component';
import { InputDemoComponent } from './input-demo.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const inputDemoRoutes: Routes = [
  {
    path: '',
    component: InputDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(inputDemoRoutes)
  ],
  declarations: [InputDemoComponent, MInputComponent],
  exports: [RouterModule, MInputComponent],
  providers: []
})
export class InputDemoModule {}
