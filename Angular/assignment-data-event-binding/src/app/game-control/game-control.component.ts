import { EventEmitter,Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number> ();
  interval: any;
  currentValue =  0;
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    
    this.interval = setInterval(()=>{ 
      this.currentValue++;
      this.intervalFired.emit(this.currentValue);
    },1000);
  }
  endGame() {
    clearInterval(this.interval);
  }

}
