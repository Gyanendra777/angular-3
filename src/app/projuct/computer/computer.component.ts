import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  userId: number;
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params.id;
    });
  }
}
