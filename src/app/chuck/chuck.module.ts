import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckComponent } from './chuck.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { JokeComponent } from './joke/joke.component';
import { DetailComponent } from './joke/detail/detail.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchJokeComponent } from './search-joke/search-joke.component';

@NgModule({
  declarations: [
    ChuckComponent,
    CategoriesComponent,
    JokeComponent,
    DetailComponent,
    RandomJokeComponent,
    SearchJokeComponent,
  ],
  imports: [CommonModule, ChuckRoutingModule, FormsModule, SharedModule],
})
export class ChuckModule {}
