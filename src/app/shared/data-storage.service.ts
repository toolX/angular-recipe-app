import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { AuthService } from "../auth/auth.service";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  private dbUrl = 'https://max-http-89c28.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, 
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    let recipes = this.recipeService.getRecipes();

    return this.http.put<Recipe[]>(this.dbUrl, recipes, {
      observe: 'body'
    });
  }

  getRecipes() {
    this.http.get<Recipe[]>(this.dbUrl, {
      observe: 'body'
    })
      .pipe(map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
