import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/containers/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RandomGuard } from './auth/guards/random.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'random',
    loadChildren: './random/random.module#RandomModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  
  {
    path: 'participants',
    loadChildren: './participants/participants.module#ParticipantsModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  
  {
    path: 'platform',
    loadChildren: './platform/platform.module#PlatformModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  
  {
    path: 'country',
    loadChildren: './country/country.module#CountryModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'tornoa',
    loadChildren: './tornoa/tornoa.module#TornoaModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  
  {
    path: 'tournament',
    loadChildren: './tournament/tournament-module#TournamentModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'ui',
    loadChildren: './ui/ui.module#UIModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }
  ,
  {
    path: 'entites',
    loadChildren: './entites/entites.module#EntitesModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  { path: '**', loadChildren: './home/home.module#HomeModule',    canActivate: [RandomGuard],
  canLoad: [RandomGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
