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
  public name:string ="";

  dataRoute: DataRoute = {
    path: '',
    title: ''
  };

  constructor(private authSvc: AuthService,
              public localService: LocalService,
              private router: ActivatedRoute,
              private route: Router) { }

 async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }

    this.localService.dataRouteObs$.subscribe({
      next: e => this.dataRoute = e
    });

    this.dataRoute = this.localService.getDataRouteSE();

    this.nameroute();
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


routerHome(){
  this.route.navigate(['/windows/home']);
}

routerPerfil(){
  this.route.navigate(['/windows/perfil']);
}

nameroute(){
  
  if(this.route.url === "/windows/documentos" ){ 
    this.name = "Mis documentos";
    
  }else if(this.route.url === "/windows/agenda" ){ 
    this.name = "Mi agenda";
  }else if(this.route.url === "/windows/clases" ){ 
    this.name = "Mis sesiones";
  }else if(this.route.url === "/windows/comunidad" ){ 
    this.name = "Mi comunidad";
  }else if(this.route.url === "/windows/perfil" ){ 
    this.name = "Perfil";
  }else if(this.route.url === "/windows/women" ){ 
    this.name = " Women";
  }else if(this.route.url === "/windows/otros" ){ 
    this.name = "Otros";
  }else if(this.route.url === "/windows/podcast" ){ 
    this.name = "Podcast";
  }else if(this.route.url === "/windows/home" ){ 
    this.name = "Inicio";
  }
  else{
    console.log("Esta no es su ruta")
  }

}
}

