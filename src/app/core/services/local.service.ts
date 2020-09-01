import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DataRoute } from 'src/app/models/route.interface';
import { DataUsPerfil } from 'src/app/models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
 

  // dataPerfilUserSubject = new Subject<any>();
  // dataPerfilUserObs$ = this.dataPerfilUserSubject.asObservable();

  dataRouteSubject = new Subject<any>();
  dataRouteObs$ = this.dataRouteSubject.asObservable();

  editPerfilSubject = new Subject<boolean>();
  editPerfilObs$ = this.editPerfilSubject.asObservable();

  nombreRutaSubject = new Subject<any>()
  nombreRutaOb$ = this.nombreRutaSubject.asObservable();


 

  constructor(public route:Router) {}


  setNameRouter(nameRoute:any){
    this.nombreRutaSubject.next(nameRoute);
    console.log("log- funcion set ",nameRoute)
  }



  setDataUserPerfilSE(data: DataUsPerfil) {
    return sessionStorage.setItem('dataUserPerfil', JSON.stringify(data));
  }

  getDataUserPerfilSE(): DataUsPerfil {
    return JSON.parse(sessionStorage.getItem('dataUserPerfil'));
  }

  addDataRoute(data: DataRoute) {
    this.dataRouteSubject.next(data);
    this.setRouteNavbar(data);
  }

  setRouteNavbar(data: DataRoute) {
    return sessionStorage.setItem('dataRoute', JSON.stringify(data));
  }

  getDataRouteSE(): DataRoute {
    return JSON.parse(sessionStorage.getItem('dataRoute'));
  }

  edit(value: boolean) {
    this.editPerfilSubject.next(value);
  }

 

}

