import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuFooterComponent,
    NavbarHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MenuFooterComponent,
    NavbarHeaderComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
