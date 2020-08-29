import { Component, OnInit } from '@angular/core';

// Servicio
import { LocalService } from 'src/app/core/services/local.service';
import { DataUserPerfil } from '../../models/user-perfil';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  dataUser = new DataUserPerfil();
  editPerfil: boolean = false;

  formDataUser: FormGroup;

  constructor( public localService: LocalService,
               private autService: AuthService,
               private buildForm: FormBuilder) { }

  ngOnInit(): void {
    this.initBuildForm();
    this.dataUser = this.localService.getDataUserPerfilSE();
    this.localService.editPerfilObs$.subscribe(e => this.editPerfil = e);
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






}

