import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckComponent } from './chuck.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { JokeComponent } from './joke/joke.component';
import { DetailComponent } from './joke/detail/detail.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

@NgModule({
  declarations: [ChuckComponent, CategoriesComponent, JokeComponent, DetailComponent, RandomJokeComponent],
  imports: [CommonModule, ChuckRoutingModule, SharedModule],
})
export class ChuckModule {}
