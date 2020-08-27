import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsRoutingModule } from './windows-routing.module';
import { WindowsComponent } from './windows.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ClasesComponent } from './clases/clases.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WindowsComponent,
    AgendaComponent,
    ClasesComponent,
    DocumentosComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    WindowsRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WindowsModule { }
