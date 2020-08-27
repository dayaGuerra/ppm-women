import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicio
import { AuthService } from '../../core/services/auth.service';
import {  UserI } from '../../models/user.interface';
import { User } from 'firebase'



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AuthService]
})
export class UserComponent implements OnInit {

  constructor( private authSvc: AuthService) { }

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({value:'', disabled:true}, Validators.required),
  })

ngOnInit(){
  //this.iniValuesForm(user)
  this.authSvc.userData$.subscribe(user =>{
    this.initValuesForm(user);

  });
}

onSaveUser(): void{
console.log('saveuser')
}

private initValuesForm(user: UserI):void{
  this.profileForm.patchValue({
    displayName: user.displayName,
    email: user.email,
  })
}

}

