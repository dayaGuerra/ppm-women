import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { LocalService } from '../../core/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUsers: any[] = [];

  constructor(private authSvc: AuthService,
              public localService: LocalService,
              private router: Router) { }

  ngOnInit(): void {
    this.authSvc.getDataUserTiempoReal();
  }

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => {
      e.forEach(doc => {
        const data = { id: doc.id, data: doc.data() };
        this.dataUsers.push(data);
      });
    });
  }

  async onGoogleLogin() {
    try {
      this.subsDataUser();
      this.authSvc.getDataUserTiempoReal();
      const user = await this.authSvc.loginGoogle();
      let indexU = -1;
      indexU = this.dataUsers.find((e, i) => e.data.idUser === user.user.uid );
      if (user && indexU === undefined) {
        let idUs = user.user.uid;
        this.authSvc.saveUserData(user.user, idUs);
<<<<<<< HEAD
        this.subsDataUser();
        this.router.navigate(['/form']);
      } else {
        this.localService.setUserLogSE(indexU);
        this.router.navigate(['/form']);
=======
        this.router.navigate(['/windows/home']);
      } else {
        this.router.navigate(['/windows/home']);
>>>>>>> f81b1a680476d29d475e9734c17eb1ba97a188d4
      }
    } catch (error) {
      console.log('erorsito', error);
    }
  }



}
