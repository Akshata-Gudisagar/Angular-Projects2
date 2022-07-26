import { Component, OnInit } from '@angular/core';
// import { eventdetail } from './eventdetail';
// import { eventdetail } from '@angular/router';
import { eventdetail } from './eventdetail';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  event:eventdetail[];
  eventcode!:String;
  
  constructor() {
    this.event=[
      new eventdetail("C01","Angular 6 Training"),
      new eventdetail("C02","React Js Training"),
      new eventdetail("C03","Spring FrameWork"),
      new eventdetail("C04","RPA")
    ];
   }

  ngOnInit(): void {
  }
  onEventIdSelected(event:eventdetail){
    this.eventcode=event.eventcode
    console.log(this.eventcode)
  }
}
