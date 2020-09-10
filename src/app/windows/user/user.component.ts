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
  public isLogged: boolean;
  public user: any;
  dataUser: any = {
    data: {
    idUser: '',
    celular: '',
    email: '',
    emprendimientoSubtitulo: '',
    emprendimientoTitulo: '',
    logoEmprendimiento: '',
    nombreCompleto: '',
    sobremi: '',
    telefono: '',
    urlPagina: '',
    urlPerfil: '',
    },
    id: ''
  };

  editPerfil: boolean = false;

  formDataUser: FormGroup;

  dataRoute: DataRoute = {
    path: '',
    title: ''
  };

  constructor( public localService: LocalService,
               private autService: AuthService,
               private buildForm: FormBuilder,
               public route: Router,
               private authSvc: AuthService) { }

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();

    this.initBuildForm();
    this.dataUser = this.localService.getDataUserPerfilSE();
    console.log(this.dataUser)
    this.dataRoute = this.localService.getDataRouteSE();
    console.log(this.dataRoute)


  }

  routerSesiones() {
    this.route.navigate(['windows/perfil']);
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
      email: [null],
      logoEmprendimiento:[null]
    });

  }

  get form() { return this.formDataUser.controls; }

  saveData() {
    const data = {
      idUser: this.dataUser.data.idUser,
      celular: this.form.celular.value !== null ? this.form.celular.value : this.dataUser.data.celular,
      email: this.form.email.value !== null ? this.form.email.value : this.dataUser.data.email,
      emprendimientoSubtitulo: this.form.emprendimiento.value !== null ? this.form.emprendimiento.value : this.dataUser.data.emprendimientoTitulo,
      emprendimientoTitulo: this.form.rubro.value !== null ? this.form.rubro.value : this.dataUser.data.emprendimientoSubtitulo,
      logoEmprendimiento: this.dataUser.data.logoEmprendimiento,
      nombreCompleto: this.form.nombreCompleto.value !== null ? this.form.nombreCompleto.value : this.dataUser.data.nombreCompleto,
      sobremi: this.form.sobreMi.value !== null ? this.form.sobreMi.value : this.dataUser.data.sobremi,
      telefono: this.form.telefono.value !== null ? this.form.telefono.value : this.dataUser.data.telefono,
      urlPagina: this.form.paginaWeb.value !== null ? this.form.paginaWeb.value : this.dataUser.data.urlPagina,
      urlPerfil: this.dataUser.data.urlPerfil,
    };
    this.dataUser.data = data;
    this.autService.editUserData(data, this.dataUser);
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
    this.editPerfil = true;
  }

}

