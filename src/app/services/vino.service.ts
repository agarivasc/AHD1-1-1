import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VinoService {
  private apiUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=wine';

  constructor(private http: HttpClient) {}
  obtenerVino() {
    return this.http.get<any>(this.apiUrl);
  }
}
