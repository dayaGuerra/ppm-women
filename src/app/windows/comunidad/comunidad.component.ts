import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit, OnChanges{

  public dataUsers: any[] = [];

  constructor(private authSvc: AuthService,
              public localService: LocalService,
              private route: Router) { }

  ngOnInit(): void {
    this.subsDataUser();
  }

  ngOnChanges(): void {
  }

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => e.forEach(doc => {
      if (doc.data()) {
        this.dataUsers.push(doc.data());
        console.log(this.dataUsers)
      }
    }));
  }

  routePerfil(id: number) {
    const data = this.dataUsers.find(e => e.idUser === id);
    const dataR = {
      path: 'visitante',
      title: 'Mi Perfil'
    };
    this.localService.setDataUserPerfilSE(data);
    this.localService.addDataRoute(dataR);
    this.route.navigate(['/windows/visitante']);
  }




}
