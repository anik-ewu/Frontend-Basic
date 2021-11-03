import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { EventEmitter, Injectable } from "@angular/core"; 
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'A test recipe', 
    'This is test', 
    'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
    'Another test recipe', 
    'This is test', 
    'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShopping(ingredients: Ingredient[]){
    this.slService.addMoreIngredients(ingredients);
  }


}