import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './m-card.component.html',
  styleUrls: ['./m-card.component.scss']
})
export class MCardComponent implements OnInit {
  @Input() option: any;
  @Output() selectChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
