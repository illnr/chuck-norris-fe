import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  joke?: Observable<Joke>;

  constructor(
    private route: ActivatedRoute,
    private chuckApi: ChuckApiService
  ) {}

  ngOnInit(): void {
    this.joke = this.route.queryParams.pipe(
      switchMap((params) => {
        console.log(params);
        const category = params.category;
        const query = params.query;
        console.log({ category, query });

        return this.chuckApi.getJoke({ category, query });
      })
    );
  }
}
