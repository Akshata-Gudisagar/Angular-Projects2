import { Pipe, PipeTransform } from '@angular/core';
import { Paraticipants } from './childcomponent/paraticipants';

@Pipe({
  name: 'eventfielter'
})
export class EventfielterPipe implements PipeTransform {

  transform( paraticipants:Paraticipants[], eventcode:String): Paraticipants[] {
    if(!eventcode){
      return paraticipants
    }
    return paraticipants.filter(e=>e.eventcode==eventcode)
  }

  }


