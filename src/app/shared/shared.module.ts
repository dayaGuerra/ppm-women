import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    MenuFooterComponent,
    NavbarHeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuFooterComponent,
    NavbarHeaderComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
