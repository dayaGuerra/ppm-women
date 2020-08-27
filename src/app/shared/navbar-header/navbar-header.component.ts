import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  public isLogged = false;
  public user:any;

  constructor(private authSvc: AuthService) { }

 async ngOnInit() {
    console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged = true;
    }
  }

  onLogout() {
    this.authSvc.logout();
  }

}
