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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
