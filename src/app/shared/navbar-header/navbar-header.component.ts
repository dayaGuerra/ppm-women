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

    this.localService.dataRouteObs$.subscribe({
      next: e => this.dataRoute = e
    });

    this.dataRoute = this.localService.getDataRouteSE();

    this.localService.nombreRutaOb$.subscribe({
      next: e  => this.name = e
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
    this.route.navigate(['/windows/perfil']);
    this.nameRoute = "Mi perfil";
    this.localService.setNameRouter(this.nameRoute);
  }

}
