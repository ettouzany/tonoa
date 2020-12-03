import { Component, OnInit } from '@angular/core';
import { Alert } from './models/alert.model';
import { AlertsService } from './services/alerts.srvice'
@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  title :string;
  message :string;
  constructor() { }
  alerts : Alert[] = AlertsService.alerts;
  ngOnInit(): void {

  }
  action(alert:Alert){
    alert.params.frazer = true;
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  close(alert){
    this.alerts.splice(this.alerts.indexOf(alert), 1);

  }
  public static openOk(status:string, btn:string, title:string, message:string,posx: string,posy:string){
    return "<div id='choose' class='bg-overlay' *ngIf='id!=0'><card title='{{title}}'><div class='row' ><div class='col-6'><button class=' w-100'class='btn btn-secondary w-100' (click)='id=0'>non</button>    </div><div class='col-6'><button class=' w-100' class='btn btn-danger w-100' (click)='deleteIt()'>oui</button></div></div></card></div>";
  }
}
