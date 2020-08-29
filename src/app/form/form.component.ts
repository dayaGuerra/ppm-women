import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  routerAcuerdo() {
    this.route.navigate(['/acuerdo']);
  }

}
