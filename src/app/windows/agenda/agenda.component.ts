import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [AuthService]
})
export class AgendaComponent implements OnInit {
  public isLogged = false;
  public user: any;

  constructor(private authSvc: AuthService) { }

 async ngOnInit() {
    console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }
 }

  onLogout() {
    this.authSvc.logout();
  }

}
