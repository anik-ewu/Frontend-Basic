import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.scss']
})
export class CustomPropertyBindingComponent implements OnInit {

  @Input('word') dercribeWord='';
  @Output() wordAdded = new EventEmitter<string>();
  textword: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  addDesWord(){
    console.log("haha", this.textword)
    this.wordAdded.emit(this.textword);
  }


}
