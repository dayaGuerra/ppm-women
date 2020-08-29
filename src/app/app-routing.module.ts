import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AcuerdoComponent } from './acuerdo/acuerdo.component';
import { AcuerdoTwoComponent } from './acuerdo-two/acuerdo-two.component';
//import { FormComponent } from './windows/modal/form/form.component';

const routes: Routes = [
  { path:'form', component: FormComponent },
  { path:'acuerdo', component: AcuerdoComponent },
  { path:'acuerdo2', component: AcuerdoTwoComponent},
  { path: 'login', loadChildren: () => import('./auth/login.module').then(m => m.LoginModule) },
  { path: 'windows', loadChildren: () => import('./windows/windows.module').then(m => m.WindowsModule) },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
