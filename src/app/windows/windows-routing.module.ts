import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowsComponent } from './windows.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ClasesComponent } from './clases/clases.component';
import { ContainerAppComponent } from '../components/pages/container-app/container-app.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: '', component: WindowsComponent },
{
  path:'', component: ContainerAppComponent,
  children: [
{ path:'agenda', component:AgendaComponent},
{ path:'clases', component: ClasesComponent},
{ path:'comunidad', component:ComunidadComponent},
{ path:'documentos', component:DocumentosComponent},
{ path:'perfil', component:UserComponent},
{ path:'', 
  redirectTo:'home',
  pathMatch:'full'
}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule { }
