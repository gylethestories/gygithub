import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { NAV_MENU } from './nav.menu';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeLink: string;
  menus = NAV_MENU;
  @Input() isLoggedIn: boolean;

  menuStatus: Array<boolean>

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.activeLink = this.menus[0].subMenu[0].path;
    this.menuStatus = Array.from({ length: this.menus.length }, () => false);
    this.menuStatus[0] = true
  }

  onNavigate(link) {
    this.router.navigateByUrl(link, { skipLocationChange: false });
    this.activeLink = link
  }

  switchMenu(i: any) {
    if (!this.menuStatus[i]) {
      this.menuStatus = Array.from({ length: this.menus.length }, () => false);
    }
    this.menuStatus[i] = true
  }
}
