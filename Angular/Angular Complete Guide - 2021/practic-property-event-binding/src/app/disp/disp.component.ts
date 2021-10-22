import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.css']
})
export class DispComponent implements OnInit {

  @Input()
  element!: { person: string; value: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
