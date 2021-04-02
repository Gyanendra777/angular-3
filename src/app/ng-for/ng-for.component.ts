import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  movese=[];
  mTitle
  mDirector
  constructor() { }

  ngOnInit(): void {
  }
remove(i){
  this.movese.splice(i)
}

  addMovie(){
    this.movese.push({title:this.mTitle,director:this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }
}
