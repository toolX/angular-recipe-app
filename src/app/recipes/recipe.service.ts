import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A new recipe',
      'A simple recipe description',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=800&q=85',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Potatoes', 10)
      ]
      ),
    new Recipe(
      'Another recipe', 
      'Another recipe description', 
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=800&q=85', 
      [
        new Ingredient('Sugar', 100),
        new Ingredient('Egg', 3)
      ]
      )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
