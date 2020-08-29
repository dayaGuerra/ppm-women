import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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

  


}
