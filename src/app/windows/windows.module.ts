import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsRoutingModule } from './windows-routing.module';
import { WindowsComponent } from './windows.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ClasesComponent } from './clases/clases.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WomenComponent } from './taller/women/women.component';
import { PodcastComponent } from './taller/podcast/podcast.component';
import { VariosComponent } from './taller/varios/varios.component';
import { HomeComponent } from './home/home.component';
import { VisitaComponent } from './visita/visita.component';
//import { FormComponent } from './modal/form/form.component';


@NgModule({
  declarations: [
    WindowsComponent,
    AgendaComponent,
    ClasesComponent,
    DocumentosComponent,
    UserComponent,
    ComunidadComponent,
    WomenComponent,
    PodcastComponent,
    VariosComponent,
    HomeComponent,
    VisitaComponent,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WindowsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WindowsModule { }
