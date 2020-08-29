import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {
  public nameRoute:any;
  public clase:string = "ninguno";

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    route.events.subscribe((url:any) => console.log("log 1", url))
   }

  ngOnInit(): void {
  
    if(this.route.url === "/windows/documentos" ){ 
      this.clase = "activo";
      
    }else if(this.route.url === "/windows/agenda" ){ 
      this.clase = "activo";
    }
    else{
      console.log("Esta no es su ruta")
    }
  
  }

  routeComunidad() {
    this.route.navigate(['/windows/comunidad']);
  }

  routeClases() {
    this.route.navigate(['/windows/clases']);
  }

  routeAgenda() {
    this.route.navigate(['/windows/agenda']);
  }

  routeDocumentos() {
    this.route.navigate(['/windows/documentos']);
  }

routeName(){}
 

}
