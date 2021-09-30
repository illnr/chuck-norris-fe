import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckComponent } from './chuck.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChuckComponent, CategoriesComponent],
  imports: [CommonModule, ChuckRoutingModule, SharedModule],
})
export class ChuckModule {}
