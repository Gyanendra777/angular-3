import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Output() massiger=new EventEmitter()

count=0;

clearCount(){
  this.count++;
  this.massiger.emit(this.count)
}

nameChanged(arg){
  console.log("modelchanged" + arg)
}


  ngOnInit(): void {
    
  }
  
}
