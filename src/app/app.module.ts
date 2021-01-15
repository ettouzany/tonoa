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
import {TornoaModule} from './tornoa/tornoa.module'
import { from } from 'rxjs';
import { TornoaService } from './tornoa/services/tornoa.service';
import { ParticipantsService } from './participants/services/participants.service';
import { ParticipantsModule } from './participants/participants.module';
import { GameModule } from './game/game.module';
import { GameService } from './game/services/game.service';
import { PlatformModule } from './platform/platform.module';
import { PlatformService } from './platform/services/platform.service';
import { CountryModule } from './country/country.module'
import { CountryService } from './country/services/country.service';
import { TournamentModule } from './tournament/tournament-module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RandomModule,
    HomeModule,
    UIModule,
    EntitesModule,
    TornoaModule,
    ParticipantsModule,
    GameModule,
    PlatformModule,
    CountryModule,
    TournamentModule,
  ],
  providers: [
    SidebarService,
    HeaderService,
    EntiteService,
    TornoaService,
    ParticipantsService,
    GameService,
    PlatformService,
    CountryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
