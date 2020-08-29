import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  routerSesiones(){
    this.router.navigate(['windows/clases'])
  }
}
