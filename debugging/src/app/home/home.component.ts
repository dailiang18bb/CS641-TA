import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    if(this.data != null){
      this.router.navigate(["/home/", this.data]);
    }
}

}
