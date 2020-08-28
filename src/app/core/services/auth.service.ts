import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// Importando Firebase
import { auth, firestore } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public user: User;
  public userData$: Observable<firebase.User>;

  public dataUser: Subject<any>;

  constructor(public afAuth: AngularFireAuth,
              public afFirestore: AngularFirestore) {
    this.userData$ = afAuth.authState;
  }

  async loginGoogle() {
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
    console.log(error);
    }
}


  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
    // redirigir al usuario
    // Si tenemos en el local storage información del usuario la deberiamos de eliminar aquí
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  // obtener los datos

  getDataUser(): Observable<any> {
   return this.afFirestore.collection('usuarios').get();
  }



  // Crear usuario en Firestore
  saveUserData(data: any, idUs) {
    const dataU = {
      idUser: idUs + 1,
      celular: '',
      email: data.email,
      emprendimientoSubtitulo: '',
      emprendimientoTitulo: '',
      logoEmprendimiento: '',
      nombreCompleto: data.displayName,
      sobremi: '',
      telefono: '',
      urlPagina: '',
      urlPerfil: data.photoURL,
    };
    return this.afFirestore.collection('usuarios').add(dataU);
  }





}
