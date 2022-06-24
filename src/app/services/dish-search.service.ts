import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class DishSearchService {

  url = environment.apiUrl;
  key = environment.apiKey;

  constructor(private http :HttpClient) { }

  searchDish(searchTerm :string):Observable<APIResponse> {
    return this.http.get<APIResponse>(this.url + "?query=" + searchTerm + "&addRecipeInformation=true" + "&apiKey=" + this.key)
  }
}
