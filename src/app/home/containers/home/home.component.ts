import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router,private currentRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  goto(link){
    this.router.navigate([link], {
      relativeTo: this.currentRoute,
    });
  }
}
