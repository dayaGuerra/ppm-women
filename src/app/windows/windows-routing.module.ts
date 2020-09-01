import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowsComponent } from './windows.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ClasesComponent } from './clases/clases.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { UserComponent } from './user/user.component';
import { WomenComponent } from './taller/women/women.component';
import { VariosComponent } from './taller/varios/varios.component';
import { PodcastComponent } from './taller/podcast/podcast.component';
import { HomeComponent } from './home/home.component';
import { VisitaComponent } from './visita/visita.component';
//import { FormComponent } from './modal/form/form.component'

const routes: Routes = [

  {
    path: '', component: WindowsComponent,
    children: [
      { path: 'agenda', component: AgendaComponent},
      { path: 'clases', component: ClasesComponent},
      { path: 'comunidad', component: ComunidadComponent},
      { path: 'documentos', component: DocumentosComponent},
      { path: 'perfil', component: UserComponent},
      { path: 'women', component: WomenComponent},
      { path: 'podcast', component: PodcastComponent},
      { path: 'home', component: HomeComponent},
      { path: 'varios', component: VariosComponent},
      { path: 'visitante', component: VisitaComponent},
      
      
      { path: '',
        redirectTo: 'agenda',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule { }
