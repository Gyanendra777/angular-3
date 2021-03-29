import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  address
  username
  age

constructor(){}


getUserValue(val:any){
  this.username = val.username;
  this.age = val.age;
  this.address = val.address;
  console.log(this.age)
}



}
