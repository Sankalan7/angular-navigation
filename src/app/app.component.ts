import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  lightTheme: boolean = true;
  toggleLightTheme(lightTheme: any) {
    this.lightTheme = lightTheme;
  }
  isAuthRoute() {
    return this.router.url === '/login' || this.router.url === '/register';
  }
  sidebarOpen: boolean = true;
  toggleSidebar(sidebarOpen: any) {
    this.sidebarOpen = sidebarOpen;
  }
}
