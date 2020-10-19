import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './containers/buttons/buttons.component';
import { CardsComponent } from './containers/cards/cards.component';

const routes: Routes = [
  {
    path:'',
    component: ButtonsComponent
  },
  {
    path:'buttons',
    component: ButtonsComponent
  },
  {
    path:'cards',
    component: CardsComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
