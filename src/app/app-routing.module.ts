import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/chuck',
    pathMatch: 'full',
  },
  {
    path: 'chuck',
    loadChildren: () =>
      import('./chuck/chuck.module').then((m) => m.ChuckModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
