import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text4';
valu="";
  templet(my){
    this.valu = my.name
    console.log(my.value);
  }
}
