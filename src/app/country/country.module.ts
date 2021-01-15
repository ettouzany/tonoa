import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CreationComponent } from './creation/creation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from '../elements/card/card.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [CreationComponent, ConsultationComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SmartTableModule,

  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class CountryModule { }
