import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Joke } from './joke';
import { Jokes } from './jokes';

@Injectable({
  providedIn: 'root',
})
export class ChuckApiService {
  readonly categoriesRoute = environment.chuckApi + '/jokes/categories';
  readonly randomRoute = environment.chuckApi + '/jokes/random';
  readonly queryRoute = (query: string) =>
    `${environment.chuckApi}/jokes/search?query=${query}`;
  readonly categoryRoute = (category: string) =>
    `${environment.chuckApi}/jokes/random?category=${category}`;

  constructor(private http: HttpClient) {}

  /**
   * Retrieve a list of available categories.
   * @returns
   */
  getCategories() {
    return this.http.get<string[]>(this.categoriesRoute);
  }

  /**
   * Get a random joke without params. Query for a joke by providing a query. Get a random joke from a category by providng a category. Query is preceding over category.
   * @param params
   * @returns
   */
  getJoke(params?: { category?: string; query?: string }): Observable<Joke> {
    if (params?.query) {
      return this.queryJoke(params?.query);
    }
    if (params?.category) {
      return this.getCategoryJoke(params.category);
    }
    return this.getRandomJoke();
  }

  /**
   * Retrieve a random chuck joke in JSON format.
   * @returns
   */
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.randomRoute);
  }

  /**
   * Free text search for jokes.
   * @param query the free text
   * @returns
   */
  queryJoke(query: string): Observable<Joke> {
    return this.http
      .get<Jokes>(this.queryRoute(query))
      .pipe(map((jokes) => jokes.result[0]));
  }

  /**
   * Retrieve a random chuck norris joke from a given category.
   * @param category
   */
  getCategoryJoke(category: string): Observable<Joke> {
    return this.http.get<Joke>(this.categoryRoute(category));
  }
}
