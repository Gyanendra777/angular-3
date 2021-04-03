import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-outputing',
  templateUrl: './outputing.component.html',
  styleUrls: ['./outputing.component.css']
})
export class OutputingComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
 
  constructor() { }

  ngOnInit(): void {
  }
 
}
