import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos de firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
// Importar enviroment para la vinculación con los permisos de Firebase
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { AcuerdoComponent } from './acuerdo/acuerdo.component';
import { AcuerdoTwoComponent } from './acuerdo-two/acuerdo-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AcuerdoComponent,
    AcuerdoTwoComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
