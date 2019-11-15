import { MultiLangDemoComponent } from './multi-lang-demo.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const MultiLangDemoRoutes: Routes = [
  {
    path: '',
    component: MultiLangDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MultiLangDemoRoutes)
  ],
  declarations: [MultiLangDemoComponent],
  exports: [RouterModule],
  providers: []
})
export class MultiLangDemoModule {}
