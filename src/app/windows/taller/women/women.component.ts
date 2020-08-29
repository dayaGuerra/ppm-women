import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(public router:Router ) { }

  ngOnInit(): void {
  }
  routerSesiones(){
    this.router.navigate(['windows/clases'])
  }
}
