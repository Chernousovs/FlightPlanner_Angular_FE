import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-menuItem.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    {
      path: '/counter',
      title: 'Simple Counter'
    },

    {
      path: '/login',
      title: 'Login'
    },

    {
      path: '/planner',
      title: 'Planner'
    },

    {
      path: '/cat-facts',
      title: 'Cat facts'
    },

    {
      path: '/users',
      title: 'Users'
    }
  ];
}
