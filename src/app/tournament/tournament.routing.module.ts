import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TornamentStructComponent } from './container/tornament-struct.component';

const routes: Routes = [
    {
      path: '',
      component: TornamentStructComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
