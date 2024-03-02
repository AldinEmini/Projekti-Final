import { Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { SearchComponent } from './pages/search/search.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import DashboardComponent from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component:DashboardComponent},
    {path: 'recipe/:id', component:RecipeComponent},
    {path: 'search', component:SearchComponent},
    {path: 'recipe-card', component:RecipeCardComponent}
];

