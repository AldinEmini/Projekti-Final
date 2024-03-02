import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe:Recipe | undefined;
  ngOnInit(): void {
  }

}
