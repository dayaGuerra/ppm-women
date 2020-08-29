import { Component, OnInit } from '@angular/core';

// Servicio
import { LocalService } from 'src/app/core/services/local.service';
import { DataUserPerfil } from '../../models/user-perfil';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { DataRoute } from '../../models/route.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
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
               private autService: AuthService,
               private buildForm: FormBuilder,
               public route:Router,
               private authSvc:AuthService) { }

 async ngOnInit(){

    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }

    
    this.initBuildForm();
    this.dataUser = this.localService.getDataUserPerfilSE();
    this.localService.editPerfilObs$.subscribe(e => this.editPerfil = e);

    this.localService.dataRouteObs$.subscribe({
      next: e => this.dataRoute = e
    });

    this.dataRoute = this.localService.getDataRouteSE();

  }

  routerSesiones(){
    this.route.navigate(['windows/perfil'])
  }

  initBuildForm() {
    this.formDataUser = this.buildForm.group({
      nombreCompleto: [null],
      sobreMi: [null],
      emprendimiento: [null],
      rubro: [null],
      paginaWeb: [null],
      celular: [null],
      telefono: [null],
      email: [null]
    });
  }

  get form() { return this.formDataUser.controls; }


  saveData() {
    console.log(this.form)
    const data = {
      idUser: this.dataUser.idUser,
      celular: this.form.celular.value !== null ? this.form.celular.value : this.dataUser.celular,
      email: this.form.email.value !== null ? this.form.email.value : this.dataUser.email,
      emprendimientoSubtitulo: this.form.emprendimiento.value !== null ? this.form.emprendimiento.value : this.dataUser.emprendimientoTitulo,
      emprendimientoTitulo: this.form.rubro.value !== null ? this.form.rubro.value : this.dataUser.emprendimientoSubtitulo,
      logoEmprendimiento: this.dataUser.logoEmprendimiento,
      nombreCompleto: this.form.nombreCompleto.value !== null ? this.form.nombreCompleto.value : this.dataUser.nombreCompleto,
      sobremi: this.form.sobreMi.value !== null ? this.form.sobreMi.value : this.dataUser.sobremi,
      telefono: this.form.telefono.value !== null ? this.form.telefono.value : this.dataUser.telefono,
      urlPagina: this.form.paginaWeb.value !== null ? this.form.paginaWeb.value : this.dataUser.urlPagina,
      urlPerfil: this.dataUser.urlPerfil,
    };
    this.dataUser = data;
    this.autService.editUserData(data);
    this.closeModl();
  }


  closeModl() {
    this.editPerfil = false;
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
 


}

