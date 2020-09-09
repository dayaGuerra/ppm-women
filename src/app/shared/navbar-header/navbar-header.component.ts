import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LocalService } from '../../core/services/local.service';
import { DataRoute } from '../../models/route.interface';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  public isLogged = false;
  public user:any;
  public name:any="Mi roadmap";
  public nameRoute: any;

  public dataUsers: any[] = [];
  dataUserLogged: any;

  dataRoute: DataRoute = {
    path: '',
    title: ''
  };

  constructor(private authSvc: AuthService,
              public localService: LocalService,
              private router: ActivatedRoute,
              private route: Router) {
              }

  async ngOnInit() {

    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }

    this.dataUserLogged = this.localService.getUserLogSE();
    this.subsDataUser();


    this.localService.dataRouteObs$.subscribe({
      next: e => this.dataRoute = e
    });

    this.dataRoute = this.localService.getDataRouteSE();

    this.localService.nombreRutaOb$.subscribe({
      next: e  => this.name = e
    });
  }

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => {
      e.forEach(doc => {
        const data = { id: doc.id, data: doc.data() };
        this.dataUsers.push(data);
      });
    });
  }

  onLogout() {
    this.authSvc.logout();
    this.route.navigate(['/']);
  }

  editPeffil() {
    console.log('editar')
    const edit = true;
    this.localService.edit(edit);
  }

  routerHome() {
    this.route.navigate(['/windows/home']);
    this.nameRoute = "Inicio";
    this.localService.setNameRouter(this.nameRoute);
  }

  routerPerfil() {
    this.dataUsers.forEach(e => {
      if (this.dataUserLogged.data.idUser === e.data.idUser) {
        this.localService.setUserLogSE(e);
        const dataR = { path: 'usuario', title: 'Mi Perfil' };
        this.localService.setRouteNavbar(dataR);
        this.localService.setDataUserPerfilSE(e);
        this.localService.setNameRouter('Mi perfil');
        this.route.navigate(['/windows/perfil']);
      }
    });
  }

}
