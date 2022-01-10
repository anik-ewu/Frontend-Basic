import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body-part',
  templateUrl: './body-part.component.html',
  styleUrls: ['./body-part.component.scss']
})
export class BodyPartComponent implements OnInit {

  descriveWords = ['positive', 'hardworker', 'never give up', 'last', 'huh'];    
  testword: string = 'test';
  constructor() { }

  ngOnInit(): void {
  }

  addWord(word: string){
    console.log("hi",word);
    this.descriveWords.push(word);
    this.testword = word;
  }

}
