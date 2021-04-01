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
  this.username = val.name.username;
  this.age = val.age.age;
  this.address = val.age.address;
  console.log(this.age)
  console.log(val)
}



}
