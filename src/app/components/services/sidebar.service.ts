import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public static menuopened:boolean = window.innerWidth < 500 ?false:true;
  public static menusecondopened:boolean  = window.innerWidth < 768 ?false:true;
  constructor() { }
  getMenuOpend(){
    return SidebarService.menuopened;
  }
}
