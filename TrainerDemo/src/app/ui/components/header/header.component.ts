import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuList = [
    { menuText: 'home', menuLink: '/' },
    { menuText: 'products', menuLink: '/products' },
    { menuText: 'forms', menuLink: '/forms' },
  ];
}
