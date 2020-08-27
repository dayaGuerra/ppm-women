import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authSvc: AuthService, private router: Router) { }
 
  async onGoogleLogin(){
    // to the services
    
    try{
      const user = await this.authSvc.loginGoogle();
      if (user){
        // redirect to agenda
        this.router.navigate(['/windows/agenda']);
      }
      }
    catch(error){
      console.log(error)
    }
  }
 
 

}
