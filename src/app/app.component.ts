import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InteractionService } from './interaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentPosts: any[]=[];
  parentPos

  gender=[
    {id:"1", value:"male"},
    {id:"2", value:"femaile"}
  ]

  sendchild(posts:any){
    this.parentPos = posts
      this.parentPosts.push(this.parentPos)
      console.log(this.parentPosts)
     
    
  }

}
