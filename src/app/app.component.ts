import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text4';
  uuname
  user=[]
  getvalu(uname){
      this.user.push({
        name:uname.value
      })
      this.uuname=""

  }
  getvalureplace(){
    this.user.splice(this.user.length -1)
  }
  onRemoveuser(i){
    this.user.splice(i, 1)
  }
}
