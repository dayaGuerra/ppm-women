import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.component.html',
  styleUrls: ['./acuerdo.component.css']
})
export class AcuerdoComponent implements OnInit {

  constructor( public route: Router ) { }

  ngOnInit(): void {
  }
  routeAcuerdoTwo() {
    this.route.navigate(['/acuerdo2']);
  }

}
