import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is test', 'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg'),new Recipe('Another test recipe', 'This is test', 'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  odRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log("clicked me");
  }

}
