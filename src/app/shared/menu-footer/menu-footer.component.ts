import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive,ActivatedRoute } from '@angular/router';
import {  LocalService } from '../../core/services/local.service'
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';


@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {
  public nameRoute:any= "Agenda";
  public clase:string = "ninguno";

  constructor(private route: Router, 
              private activeRoute: ActivatedRoute, 
              public LocalSvc : LocalService)
               {
                
              }

  ngOnInit(): void {
  
   /* if(this.route.url === "/windows/documentos" ){ 
      this.clase = "activo";
      
    }else if(this.route.url === "/windows/agenda" ){ 
      this.clase = "activo";
    }
    else{
      console.log("Esta no es su ruta")
    }*/
  }

  routeComunidad() {
    this.route.navigate(['/windows/comunidad']);
    this.nameRoute = "Mi comunidad"
    this.LocalSvc.setNameRouter(this.nameRoute);
    
  }

  routeClases() {
    this.route.navigate(['/windows/clases']);
    this.nameRoute = "Mis sesiones";
    this.LocalSvc.setNameRouter(this.nameRoute);
  }

  routeAgenda() {
    this.route.navigate(['/windows/agenda']);
    this.nameRoute = "Mi agenda";
    this.LocalSvc.setNameRouter(this.nameRoute);
  }

  routeDocumentos() {
    this.route.navigate(['/windows/documentos']);
    this.nameRoute = "Mis documentos"
    this.LocalSvc.setNameRouter(this.nameRoute);
  }

 

}
