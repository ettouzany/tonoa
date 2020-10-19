import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../services/header.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showActions :boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  tagglemenu(){
    SidebarService.menuopened = !SidebarService.menuopened;
  }
  openfull(){
    if(!document.fullscreenElement) HeaderService.openFullscreen(document.body);
    else HeaderService.closeFullscreen()
    
  }
  fullscreen(){
    return document.fullscreenElement;
  }
  openchat(){
    HeaderService.chat = !HeaderService.chat;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    /*
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
        */
  }
}
