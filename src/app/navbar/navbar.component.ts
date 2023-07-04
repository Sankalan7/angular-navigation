import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() sidebarOpen: boolean = true;
  @Input() lightTheme: boolean = false;

  baseHover: boolean = false;
  toggleBaseHover() {
    this.baseHover = !this.baseHover;
  }
}
