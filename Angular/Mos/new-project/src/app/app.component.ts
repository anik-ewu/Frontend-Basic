import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode='list';

  courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
  ]

  counter=4;

  onAdd(){
    this.courses.push({id: this.counter, name: 'courses'+this.counter})
    this.counter++;
  }
  // onRemove(course){
  //   let index=this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

}
