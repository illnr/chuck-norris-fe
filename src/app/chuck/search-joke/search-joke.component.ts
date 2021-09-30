import { Component } from '@angular/core';

@Component({
  selector: 'app-search-joke',
  templateUrl: './search-joke.component.html',
  styleUrls: ['./search-joke.component.scss'],
})
export class SearchJokeComponent {
  search: any;

  constructor() {}

  onSubmit() {
    console.log(this.search);
  }
}
