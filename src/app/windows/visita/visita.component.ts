import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/core/services/local.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataRoute } from 'src/app/models/route.interface';
import { DataUserPerfil } from 'src/app/models/user-perfil';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {
  public isLogged = false;
  public user:any;
  dataUser = new DataUserPerfil();
  editPerfil: boolean = false;

  formDataUser: FormGroup;

  dataRoute: DataRoute = {
    path: '',
    title: ''
  };

  constructor( public localService: LocalService,
    public router:Router,
   ) {
     }

async ngOnInit(){
this.dataUser = this.localService.getDataUserPerfilSE();
}

routerBack(){
  this.router.navigate(['windows/visitante'])
  }

}

