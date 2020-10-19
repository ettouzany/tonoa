import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarService} from './components/services/sidebar.service';
import { HeaderService} from './components/services/header.service';
import { EntiteService} from './entites/services/entites.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RandomModule } from './random/random.module';
import { HomeModule } from './home/home.module';
import { EntitesModule } from './entites/entites.module';
import { UIModule } from './ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat-notifications/chat.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RandomModule,
    HomeModule,
    UIModule,
    EntitesModule,
  ],
  providers: [
    SidebarService,
    HeaderService,
    EntiteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
