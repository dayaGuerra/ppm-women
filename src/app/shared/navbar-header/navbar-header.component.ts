import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  public isLogged = false;
  public user:any;

  constructor(private authSvc: AuthService, public route: Router) { }

 async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    console.log(this.user);
    if (this.user) {
      this.isLogged = true;
    }
  }

  onLogout() {
    this.authSvc.logout();
  }

routerHome(){
  this.route.navigate(['/windows/home']);
}

routerPerfil(){
  this.route.navigate(['/windows/perfil']);
}

}
