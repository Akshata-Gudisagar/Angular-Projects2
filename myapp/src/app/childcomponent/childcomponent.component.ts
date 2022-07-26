import { Component, Input, OnInit } from '@angular/core';
import { Paraticipants } from './paraticipants';
import { EventfielterPipe } from '../eventfielter.pipe';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  paraticipants:Paraticipants[];
  @Input()
  eventcode!:String;
  constructor() {
    this.paraticipants=[
      new Paraticipants("Anand Takur","anand.takur@gmail.com","C01",new Date()),
      new Paraticipants("Sumathi Monoharan","sumathi.monoharan@gmail.com","C02",new Date()),
      new Paraticipants("Kishor Kumar","kishor.kumar@gmail.com","C03",new Date()),
      new Paraticipants("Ajay Varma","ajay.varma@gmail.com","C04",new Date()),
      new Paraticipants("Gopi murugan","gopi.murugan@gmail.com","C01",new Date()),
      new Paraticipants("Harinath Kumaresen","harinath.kumaresen@gmail.com","C02",new Date())
    ]
   }

  ngOnInit(): void {
  }

}
