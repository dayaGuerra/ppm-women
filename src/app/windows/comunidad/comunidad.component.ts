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

  dataUserLogged: any;

  constructor(private authSvc: AuthService,
              public localService: LocalService,
              private route: Router) { }

  ngOnInit(): void {
    this.dataUserLogged = this.localService.getUserLogSE();
    this.subsDataUser();
  }

  ngOnChanges(): void {}

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => {
      e.forEach(doc => {
        const data = { id: doc.id, data: doc.data() };
        this.dataUsers.push(data);
      });
    });
  }

  routePerfil(id: string) {
    if (id === this.dataUserLogged.data.idUser) {
      this.dataUsers.forEach(e => {
        if (e.data.idUser === id) {
          this.localService.setUserLogSE(e);
        }
      });
      const dataR = { path: 'usuario', title: 'Mi Perfil' };
      this.localService.setRouteNavbar(dataR);
      this.localService.setDataUserPerfilSE(this.dataUserLogged);
      this.localService.setNameRouter('Mi perfil');
      this.route.navigate(['/windows/perfil']);
    } else {
      this.dataUsers.forEach(e => {
        if (e.data.idUser === id) {
          this.localService.setDataUserPerfilSE(e);
          const dataR = { path: 'visitante', title: 'Perfil' };
          this.localService.setNameRouter('Perfil');
          this.localService.setRouteNavbar(dataR);
        }
      });
      this.route.navigate(['/windows/perfil']);
    }
  }




}
