import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { HeaderService } from './components/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'porto';
  constructor(
    private authService: AuthService,
  ){}
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  isChatOpen(){
    return HeaderService.chat;
  }
}
