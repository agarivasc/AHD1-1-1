import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule, CommonModule],  // Correctly importing necessary modules
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrls: ['./tequila.component.css'],  // Corrected from 'styleUrl' to 'styleUrls'
})
export class TequilaComponent implements OnInit {
  data: any[] = [];
  selectedDrink: any = null;

  constructor(private tequilaService: TequilaService) {}

  ngOnInit(): void {
    this.tequilaService.obtenerTequila().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }

  verDetalles(drink: any): void {
    this.selectedDrink = drink;
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

  showDetails(drink: any): void {
    this.selectedDrink = drink;
  }

  closeDetails(): void {
    this.selectedDrink = null;
  }
}
