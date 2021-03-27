import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text4';

  Selectproduct:string;
  
  getvalu(drapd){
    console.log(drapd.target.value);
    this.Selectproduct=drapd.target.value;
  }

}
