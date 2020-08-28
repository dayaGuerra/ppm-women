import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acuerdo-two',
  templateUrl: './acuerdo-two.component.html',
  styleUrls: ['./acuerdo-two.component.css']
})
export class AcuerdoTwoComponent implements OnInit {

  constructor( public route: Router) { }

  ngOnInit(): void {
  }
routeHome(){
  this.route.navigate(['/windows/home']);
}

}
