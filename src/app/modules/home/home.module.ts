import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArmySelectorComponent } from './components/army-selector/army-selector.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HomePageComponent,
  ],
  declarations: [
    ArmySelectorComponent,
    HomePageComponent,
  ],
  providers: [],
})
export class HomeModule { }
