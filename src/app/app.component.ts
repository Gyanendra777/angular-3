import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home:string;
  comp1Exist:boolean=true;
constructor(){}

getvalue(val){
    this.home = val.value
}
destroy(){
  this.comp1Exist = false;
}



}
