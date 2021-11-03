
import { Injectable } from "@angular/core";


@Injectable()

export class CounterService {

  activeToInactive = 1;
  inactiveToActive = 10;

  incrementActiveToInactive(){
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }
  incrementInactiveToActive(){
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }

}