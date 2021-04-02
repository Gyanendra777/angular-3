import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-outputing',
  templateUrl: './outputing.component.html',
  styleUrls: ['./outputing.component.css']
})
export class OutputingComponent implements OnInit {
  @Output() childerader=new EventEmitter()
  sendr: any;
  outeeee
  constructor() { }

  ngOnInit(): void {
  }
  sender(outeeee){
    this.sendr =outeeee
    this.childerader.emit(this.sendr)
  }

}
