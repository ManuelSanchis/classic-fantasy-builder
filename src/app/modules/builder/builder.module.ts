import { NgModule } from '@angular/core';

import { BuilderPageComponent } from './pages/builder-page/builder-page.component';
import { UnitSelectorComponent } from './components/unit-selector/unit-selector.component';

@NgModule({
  imports: [],
  exports: [
    BuilderPageComponent,
  ],
  declarations: [
    BuilderPageComponent,
    UnitSelectorComponent,
  ],
  providers: [],
})
export class BuilderModule { }
