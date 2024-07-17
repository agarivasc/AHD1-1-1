import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MargaritaService } from '../services/margarita.service';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  [key: string]: string | undefined;
}

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrls: ['./margarita.component.css'],
})
export class MargaritaComponent implements OnInit {
  data: Drink[] = [];
  selectedDrink: Drink | null = null;

  constructor(private margaritaService: MargaritaService) {}

  ngOnInit(): void {
    this.margaritaService.obtenerMargarita().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }

  getIngredients(drink: Drink): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  showDetails(drink: Drink): void {
    this.selectedDrink = drink;
  }

  closeDetails(): void {
    this.selectedDrink = null;
  }
}
