import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { CardModule } from '../card/card.module';
import { AlertsService } from './services/alerts.srvice'


@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,CardModule
  ],
  exports:[
    AlertsComponent
  ],
  providers:[AlertsService]
})
export class AlertsModule { }
