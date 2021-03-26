import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice',
  templateUrl: './splice.component.html',
  styleUrls: ['./splice.component.css']
})
export class SpliceComponent implements OnInit {

  user=[]

  getvalu(uname){
    this.user.push({
      name:uname.value
    })
  }
  getRemove(){
    this.user.splice(this.user.length-1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
