import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  providers: [],
})
export class SharedModule { }
