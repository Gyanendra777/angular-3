import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  genders = [
    {id:"1", valu:"male"},
    {id:"2", valu:"female"}
  ];
  // defoultvaluee="female";
  myReactiveForm:FormGroup


  constructor( ) { }

  ngOnInit() {
   this.myReactiveForm = new FormGroup({
     "userDtail": new FormGroup ({
       "userName": new FormControl(null, Validators.required),
       "email": new FormControl(null,  [Validators.required, Validators.email]),

     }),
     "course": new FormControl("angular", Validators.required),
     "gende": new FormControl("male",  Validators.required)
   })
  }
  onSubmit(){
    console.log(this.myReactiveForm.value)
  }

}
