import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chuc
  
  sa="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  cssArrays={
    'red':true, 'size20':false
  }
  cssArray=[
     'red',
     'size20'
  ]
  
  valu=""
  parentCount = 0;

  displayCounter(ev){
    this.parentCount = ev.target.value;
    
    console.log(this.parentCount)
  }
  name=""
  clearName(){
    this.name=""
  }
  constructor(){
    console.log()
  }
  chuckChander(dsder){
    this.chuc = dsder
    console.log(this.chuc)
  }

}
