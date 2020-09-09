import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { first, map } from 'rxjs/operators';
// Importando Firebase
import { auth, firestore,  } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public user: User;
  public userData$: Observable<firebase.User>;

  public dataUser: Subject<any>;

  constructor(public afAuth: AngularFireAuth,
              public localService: LocalService,
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

  getDataUserTiempoReal() {
    this.afFirestore.collection('usuarios').snapshotChanges().pipe(
      map(actions => actions.map(a => {
       console.log(a)
      })) );
  }

  // Crear usuario en Firestore
  saveUserData(data: any, idUs) {
    const dataU = {
      idUser: idUs,
      celular: '5555555',
      email: data.email,
      emprendimientoSubtitulo: 'Describe tu emprendimiento',
      emprendimientoTitulo: 'Editar emprendimiento',
      logoEmprendimiento: '',
      nombreCompleto: data.displayName,
      sobremi: 'Edita tu perfil',
      telefono: '',
      urlPagina: 'Edita tu página',
      urlPerfil: data.photoURL,
    };

    this.localService.setUserLogSE({data: dataU, id: ''});
    return this.afFirestore.collection('usuarios').add(dataU);
  }

  editUserData(data: any, dataUser: any) {
    const ref = this.afFirestore.collection('usuarios').doc(dataUser.id);
    return ref.set(data)
    .then(() => {
    console.log('Document successfully updated!');
    })
    .catch((error) => {
    console.error('Error updating document: ', error);
    });
  }





}
