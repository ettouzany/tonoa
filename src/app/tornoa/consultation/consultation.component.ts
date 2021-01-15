import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor( private router: Router,private currentRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  goto(link){
    this.router.navigate([link], {
      relativeTo: this.currentRoute,
    });
  }
}
