import { Component, OnInit, AfterViewInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit, AfterViewInit {
  isOpen = false;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  onClick() {}
}
