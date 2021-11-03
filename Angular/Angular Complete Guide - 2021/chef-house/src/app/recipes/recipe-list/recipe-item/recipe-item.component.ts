import { RecipeService } from './../../recipe.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  
  constructor(private resiceService: RecipeService) { }

  ngOnInit(): void {
  }

  showRecipeDetails(){
    this.resiceService.recipeSelected.emit(this.recipeItem);
  }

}
