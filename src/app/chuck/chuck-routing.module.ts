import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck.component';
import { JokeComponent } from './joke/joke.component';

const routes: Routes = [
  { path: '', component: ChuckComponent },
  { path: 'joke', component: JokeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuckRoutingModule {}
