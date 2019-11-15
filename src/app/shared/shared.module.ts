import { TranslatePipe } from './pipes/translatepipe';
import { CodePartComponent } from './../components/code-part/code-part.component';
import { AttributeTableComponent } from '../components/attribute-table/attribute-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTableComponent} from '../components/md-table/md-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AttributeTableComponent, CodePartComponent, TranslatePipe, MdTableComponent],
  exports: [AttributeTableComponent, CodePartComponent, TranslatePipe, MdTableComponent]
})
export class SharedModule {}
