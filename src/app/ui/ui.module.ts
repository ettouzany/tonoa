import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { ButtonsComponent } from './containers/buttons/buttons.component';
import { CardsComponent } from './containers/cards/cards.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UIModule { }
