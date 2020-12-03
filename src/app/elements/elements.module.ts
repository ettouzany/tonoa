import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module'

import { ElementsRoutingModule } from './elements-routing.module';
import { AlertsModule } from './alerts/alerts.module'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    AlertsModule,
    CardModule
  ]
})
export class ElementsModule { }
