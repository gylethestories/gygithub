import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeGeneratorComponent } from './code-generator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CodeGeneratorComponent
    }]),
  ],
  declarations: [CodeGeneratorComponent]
})
export class CodeGeneratorModule { }
