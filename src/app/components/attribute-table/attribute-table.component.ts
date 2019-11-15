import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.scss']
})
export class AttributeTableComponent implements OnInit {
  @Input() headers: Array<any>;
  @Input() contents: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
