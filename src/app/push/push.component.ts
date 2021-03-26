import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {
  uuname=""
  user=[];
  gater(uname){
this.user.push({
  name:uname.value
})
this.uuname=""
  }

  getRemove(){
    this.user.splice(this.user.length-1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
