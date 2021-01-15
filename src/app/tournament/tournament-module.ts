import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoutingModule } from './tournament.routing.module';
import { TornamentStructComponent } from './container/tornament-struct.component';
import {NgTournamentTreeModule} from 'ng-tournament-tree';
import { MatchModule } from './match/match.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from '../elements/card/card.module';
import {NgttDoubleEliminationTreeModule} from './ng-tournament-tree/src/lib/double-elimination-tree/ngtt-double-elimination-tree.module';
import {NgttSingleEliminationTreeModule} from './ng-tournament-tree/src/lib/single-elimination-tree/ngtt-single-elimination-tree.module';

@NgModule({
  declarations: [TornamentStructComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule ,
    CardModule,
    TournamentRoutingModule,    
    NgTournamentTreeModule,
    MatchModule,
    NgttSingleEliminationTreeModule,
    NgttDoubleEliminationTreeModule,

  ],
  
  schemas: [NO_ERRORS_SCHEMA]
})
export class TournamentModule { }
