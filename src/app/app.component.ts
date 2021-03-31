import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:"hello"
  
  parent = 10;
  parentCount = 0;

  prant="prant in user name input mathade"

  displayCounter(count){
    this.parentCount = count;
    console.log(this.parentCount)
  }

}
