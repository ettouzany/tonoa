import { Injectable } from '@angular/core';
import { Alert, alertParams } from './../models/alert.model'
@Injectable()
export class AlertsService {
  public static alerts:Alert[] = [];
  public static AddAlert(alert:Alert) {
    this.alerts.push(alert);
    return this.alerts[this.alerts.length-1];
  }
}
