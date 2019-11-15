import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  onClick() {
    this.router.navigate(['/home']);
  }
}
