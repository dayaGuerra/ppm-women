import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  routerSesiones(){
    this.router.navigate(['windows/clases'])
  }

}
