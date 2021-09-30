import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { ChuckApiService } from './chuck-api.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss'],
})
export class ChuckComponent implements OnInit {
  /**
   * List of available categories.
   */
  categories: Observable<string[]>;

  constructor(private chuckApi: ChuckApiService) {
    this.categories = this.chuckApi
      .getCategories()
      .pipe(catchError(() => of([])));
  }

  ngOnInit(): void {}
}
