import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  constructor( public route: Router) { }

  ngOnInit(): void {
  }

women() {
    this.route.navigate(['/windows/women']);
  }
  
  podcast() {
    this.route.navigate(['/windows/podcast']);
  }

  varios() {
    this.route.navigate(['/windows/varios']);
  }

}
