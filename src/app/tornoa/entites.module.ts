import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitesRoutingModule } from './entites-routing.module';
import { CreationComponent } from './creation/creation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CreationComponent, ConsultationComponent],
  imports: [
    CommonModule,
    EntitesRoutingModule,
    FormsModule, ReactiveFormsModule,
    RouterModule 
  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class EntitesModule { }
