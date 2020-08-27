import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos de firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
// Importar enviroment para la vinculación con los permisos de Firebase
import { environment } from 'src/environments/environment';
import { AgendaComponent } from './windows/agenda/agenda.component';
import { ClasesComponent } from './windows/clases/clases.component';
import { ComunidadComponent } from './windows/comunidad/comunidad.component';
import { DocumentosComponent } from './windows/documentos/documentos.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { MenuFooterComponent } from './shared/menu-footer/menu-footer.component'


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ClasesComponent,
    ComunidadComponent,
    DocumentosComponent,
    ContainerAppComponent,
    MenuFooterComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
