import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CreationComponent } from './creation/creation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from '../elements/card/card.module';


@NgModule({
  declarations: [CreationComponent, ConsultationComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule, ReactiveFormsModule,
    RouterModule ,
    CardModule,

  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class GameModule { }
