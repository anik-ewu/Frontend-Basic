import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  flag:boolean = true;
  @Output() navigatePage = new EventEmitter<boolean>();

  openRecipes(){
    this.navigatePage.emit(this.flag=true);
  }
  openShopping(){
    this.navigatePage.emit(this.flag=false);
  }
}