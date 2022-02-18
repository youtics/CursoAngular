import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:String="";
  constructor() { 
    
  }

  ngOnInit(): void {
    this.image = "https://i.ytimg.com/vi/Iw_O2B3wvcs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDudCpcJJ_Uaj-0qJWv2KLAuEvjXg";
  }

}
