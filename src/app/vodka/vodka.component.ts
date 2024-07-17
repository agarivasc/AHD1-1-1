import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VodkaService } from '../services/vodka.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css',
})
export class VodkaComponent {
  data: any[] = [];
  selectedDrink: any = null;
  constructor(private vodkaService: VodkaService) {}

  ngOnInit(): void {
    this.vodkaService.obtenerVodka().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }

  getIngredients(drink: any): string[] {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  verDetalles(drink: any): void {
    this.selectedDrink = drink;
  }

  closeDetails(): void {
    this.selectedDrink = null;
  }
}
