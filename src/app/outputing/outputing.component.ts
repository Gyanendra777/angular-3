import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-outputing',
  templateUrl: './outputing.component.html',
  styleUrls: ['./outputing.component.css']
})
export class OutputingComponent implements OnInit {
  @Input() childeran = new EventEmitter()
  sund
  sunder
  constructor() { }
  ngOnInit(): void {}

  senderchild(sund) {
      this.sunder = sund
    this.childeran.emit(this.sunder)

  }
}
