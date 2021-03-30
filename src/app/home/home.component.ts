import {Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('simpleform') myform:NgForm

usernamee="gyanendra dubey"

fistname
  valusend(val){
    this.fistname = val.userditel.fast
      console.log(this.fistname)
      console.log(val)
  }
  constructor( ) { }

  ngOnInit() {
   
  }

}
