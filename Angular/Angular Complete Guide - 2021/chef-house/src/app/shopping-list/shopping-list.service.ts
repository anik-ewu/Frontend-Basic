import { Ingredient } from './../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()

export class ShoppingListService {

  ingredientChanged = new EventEmitter < Ingredient[]>(); 

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newRecipe: Ingredient) {
    this.ingredients.push(newRecipe);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addMoreIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}