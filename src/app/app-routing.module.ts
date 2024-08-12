import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuilderPageComponent } from './modules/builder/pages/builder-page/builder-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'builder/:id',
    component: BuilderPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
