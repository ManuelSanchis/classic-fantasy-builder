import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [],
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
