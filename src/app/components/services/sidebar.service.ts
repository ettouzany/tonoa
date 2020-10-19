import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public static menuopened = window.innerWidth < 500 ?false:true;
  constructor() { }
  getMenuOpend(){
    return SidebarService.menuopened;
  }
}
