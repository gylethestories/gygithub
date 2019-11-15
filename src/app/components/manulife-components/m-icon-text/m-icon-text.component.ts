import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'm-icon-text',
  templateUrl: './m-icon-text.component.html',
  styleUrls: ['./m-icon-text.component.scss']
})
export class MIconTextComponent implements OnInit {
  @Input() content: IconTextContent;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToUrl() {
    this.router.navigate([this.content.url]);
  }
}
