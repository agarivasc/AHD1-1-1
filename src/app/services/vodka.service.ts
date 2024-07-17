import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VodkaService {
  private apiUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka';

  constructor(private http: HttpClient) {}
  obtenerVodka() {
    return this.http.get<any>(this.apiUrl);
  }
}
