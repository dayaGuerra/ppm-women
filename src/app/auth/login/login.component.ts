import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUsers: any[] = [];

  constructor(private authSvc: AuthService,
              private router: Router) { }


  ngOnInit(): void {
  }

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => {
      console.log(e)
      e.forEach(doc => {
        console.log(doc.id, doc.data())
      if (doc.data()) {
        this.dataUsers.push(doc.data());
      }
    })
  });
  }




  async onGoogleLogin() {
    try {
      this.subsDataUser();
      const user = await this.authSvc.loginGoogle();
      let indexU = -1;
      indexU = this.dataUsers.find(e => e.email === user.user.email);
      if (user && indexU === undefined) {
        let idUs = this.dataUsers.length;
        this.authSvc.saveUserData(user.user, idUs);
        this.router.navigate(['/windows/agenda']);
      } else {
        this.router.navigate(['/windows/agenda']);
      }
    } catch (error) {
      console.log('erorsito', error);
    }
  }



}
