import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChuckApiService {
  readonly categoriesRoute = environment.chuckApi + '/jokes/categories';

  constructor(private http: HttpClient) {}

  /**
   * Retrieve a list of available categories.
   * @returns
   */
  getCategories() {
    return this.http.get<string[]>(this.categoriesRoute);
  }
}
