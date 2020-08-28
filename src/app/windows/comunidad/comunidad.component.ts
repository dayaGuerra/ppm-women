import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit, OnChanges{

  public dataUsers: any[] = [];

  constructor(private authSvc: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.subsDataUser();
  }

  ngOnChanges(): void {
    console.log(this.dataUsers)
  }

  subsDataUser() {
    this.authSvc.getDataUser().subscribe(e => e.forEach(doc => {
      if (doc.data()) {
        this.dataUsers.push(doc.data());
        console.log(this.dataUsers)
      }
    }));
  }

  routePerfil() {
    this.route.navigate(['/windows/perfil']);
  }




}
