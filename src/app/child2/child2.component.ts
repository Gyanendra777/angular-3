import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Output() massiger=new EventEmitter()
  counter = 0;
  constructor() { }

  ngOnInit(): void {
    
  }
  valueChange(){
    this.counter += 1;
    this.massiger.emit(this.counter);
  }

}
