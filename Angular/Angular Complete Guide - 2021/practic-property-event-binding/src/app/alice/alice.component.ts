import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alice',
  templateUrl: './alice.component.html',
  styleUrls: ['./alice.component.css']
})
export class AliceComponent implements OnInit {

  name='';
  value='';
  @Output() addedByAlice = new EventEmitter< {personName: string, newValue: string}> ();
  constructor() { }

  ngOnInit(): void {
  }

  onAddAlice(){
    this.addedByAlice.emit({personName: this.name, newValue: this.value});
  }

}
