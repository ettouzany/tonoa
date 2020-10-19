import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public static openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
  }
  public static chat :boolean;
  constructor() { }
  getchat(){
    return HeaderService.chat;
  }
  
  public static closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
