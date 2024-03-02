import { Component, Input, OnInit, inject } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit{
  recipeService = inject(RecipeService)
  route = inject(ActivatedRoute);

recipeId: any
recipe: Recipe | undefined
  ngOnInit(): void {
this.route.paramMap.pipe(take(1)).subscribe((param)=>{
  this.recipeId = param.get('id');
  this.recipeService.getRecipe(this.recipeId).subscribe((res:Recipe) => {console.log(res)
    this.recipe = res

  });

})
}


}
