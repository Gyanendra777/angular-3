import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {
userId :number;
  constructor(private router:ActivatedRoute) {console.log('hello last router') }

  ngOnInit(): void {
    this.router.params.subscribe((params:Params)=>{
      this.userId=params.id;
    })
  }

}
