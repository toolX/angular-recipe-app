import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  private dbUrl = 'https://max-http-89c28.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let recipes = this.recipeService.getRecipes();

    return this.http.put(this.dbUrl, recipes, options)
      .pipe(map((response: Response) => response.json()));
  }

  getRecipes() {
    this.http.get(this.dbUrl)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
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
