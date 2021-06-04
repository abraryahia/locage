import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = MENU_ITEMS;
}
