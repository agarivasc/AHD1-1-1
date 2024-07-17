import { Component } from '@angular/core';
import { VinoService } from '../services/vino.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vino',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Correctly include CommonModule here
  providers: [VinoService],
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css'], // Correct 'styleUrl' to 'styleUrls'
})
export class VinoComponent {
  data: any[] = [];
  selectedDrink: any = null;
  constructor(private vinoService: VinoService) {}
  ngOnInit(): void {
    this.vinoService.obtenerVino().subscribe((datos) => {
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
