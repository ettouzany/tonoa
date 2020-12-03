import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("title") title:string;
  @Input() elements:any[]= [];
  @Input("countent") countent:string;
  constructor() { }

  ngOnInit(): void {
    
  }
}
