import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [RouterModule, RecipeCardComponent]
})
export default class DashboardComponent implements OnInit{
  Router = inject(Router);
  recipeService = inject(RecipeService)
  food:any;
  recipes:Recipe[] | undefined

  navigateToRecipe(){
    this.Router.navigate(['/recipe']);
  }

  ngOnInit(): void {
this.recipeService.getRecipes().subscribe((res)=>{
  this.recipes = res
  console.log(this.recipes);
  
})  }


}
