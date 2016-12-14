import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
activeHome:string="active";
activeTeacher:string="";
activeCourse:string="";
  constructor() { }

  ngOnInit() {
  }

}
