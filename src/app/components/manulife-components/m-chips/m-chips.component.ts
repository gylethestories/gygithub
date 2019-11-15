import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-chips',
  templateUrl: './m-chips.component.html',
  styleUrls: ['./m-chips.component.scss']
})
export class MChips implements OnInit {
  @Input() options: MChipsOptions;

  constructor() {}

  ngOnInit() {}
}
