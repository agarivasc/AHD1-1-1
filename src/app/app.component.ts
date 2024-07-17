import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CoctelesService } from './services/cocteles.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink],
  providers: [CoctelesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data: any[] = [];
  constructor(private coctelServicio: CoctelesService) {}
  ngOnInit(): void {
    this.coctelServicio.obtenerCocteles().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }
}
