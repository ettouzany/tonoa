import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu:Menu[] = [
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"Entites",
      icon:"donut_small",
      link:"entites",
      new:false,
      notifications:95,
      submenus: [
        {
          open:false,
          title:"Creer",
          icon:"donut_small",
          link:"creer",
          new:false,
          notifications:95,
          submenus: []
        },
        {
          open:false,
          title:"Consulter",
          icon:"donut_small",
          link:"consulter",
          new:false,
          notifications:95,
          submenus: []
        },
      ]
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
        {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"home",
      new:false,
      notifications:95,
      submenus: []
    },
    {
      open:false,
      title:"elements",
      icon:"event_note",
      link:"ui",
      new:false,
      notifications:95,
      submenus: [
        {
          open:false,
          title:"UI",
          icon:"donut_small",
          link:"string",
          new:false,
          notifications:95,
          submenus: [
            { 
              open:false,     
              title:"string",
              icon:"donut_small",
              link:"string",
              new:false,
              notifications:95,
              submenus: []
            }
          ]
        },
        {
          open:false,
          title:"UX",
          icon:"donut_small",
          link:"buttons",
          new:false,
          notifications:95,
          submenus: []
        },
        {
          open:false,
          title:"UX",
          icon:"donut_small",
          link:"cards",
          new:false,
          notifications:95,
          submenus: []
        }
      ]
    },
    {
      open:false,
      title:"home",
      icon:"donut_small",
      link:"random",
      new:false,
      notifications:95,
      submenus: []
    },
  ];
  domobile:boolean;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        SidebarService.menuopened =  window.innerWidth < 500 ?false:true;
        this.domobile = window.innerWidth > 500 ?false:true;
  }
  constructor(
    private sidebarService:SidebarService,
    private router: Router,
  ) {this.getScreenSize();
  }
  ss : boolean;

  ngOnInit(): void {
  }
  Menuopened(){
    return this.sidebarService.getMenuOpend();
  }
  closeall(){
    this.menu.forEach(e => {
      e.open = false;
      e.submenus.forEach(ee=>ee.open = false)
    });
  }
  routing(url:string[]){
    this.router.navigate(url);
  }
  toOpen(menus:Menu,menu:Menu,el:Menu){
    const iws = menus.open;
    const iw = menu?menu.open:false;
    if(el){
      this.routing([menus.link,menu.link,el.link]);
      return;
    }else{
      this.closeall();
    }
    if(menus.submenus.length)
    {
      menus.open = !iws;
      
      if(menu)
      {
        
        menus.open = !menus.open;
        if(menu.submenus.length)
        menu.open = !iw;
        else{
          this.routing([menus.link,menu.link]);
          return;

        }
      }
    } else{
      this.routing([menus.link]);
       return;

    }
  }
  
}
export class Menu{
  open:boolean = false;
  title:string;
  icon:string;
  link:string;
  new:boolean;
  notifications:number;
  submenus : Menu[] = [];
}
