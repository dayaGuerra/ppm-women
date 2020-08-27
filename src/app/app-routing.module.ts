import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './windows/agenda/agenda.component';
import { ComunidadComponent } from './windows/comunidad/comunidad.component';
import { ClasesComponent } from './windows/clases/clases.component';
import { DocumentosComponent } from './windows/documentos/documentos.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component'
import { UserComponent } from './windows/user/user.component';

const routes: Routes = [
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
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
