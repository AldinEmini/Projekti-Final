import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public constructor(private http:HttpClient) { }
  getRecipes() {
    const url:string = 'https://dummyjson.com/recipes';
    const params: any = { limit:12 }
    return this.http.get(url, { params }).pipe(map((res: any) =>{
      return res.recipes
    }))
  }
getRecipe(id: string): Observable<Recipe>{
  return this.http.get<any>(`https://dummyjson.com/recipes/${id}`)
}

}
