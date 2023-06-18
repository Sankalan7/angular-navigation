import { Component, EventEmitter, Output } from '@angular/core';
import { sidebarData } from './sidebarData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  sidebarOpen: boolean = true;
  toggleSidebarOpen() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggled.emit(this.sidebarOpen);
  }
  data = sidebarData;
  lightTheme = false;
  toggleTheme() {
    this.lightTheme = !this.lightTheme;
  }
}
