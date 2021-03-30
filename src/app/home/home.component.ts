import {Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('simpleform') myform:NgForm

genders = [
  {id:"1", gender:'male'},
  {id:"2", gender:'female'}
];
defoultvaluee="female";
usernamee="gyanendra dubey"

setva(){
  this.myform.setValue({
    
    userditel:{
      fast:"RAJU",
      last:"AAAAAAA"
    },
    address:"",
    email:"",
    gender:""

})
}
pachva(){
  this.myform.form.patchValue({
    
    userditel:{
      fast:"raju",
      last:"dubey"
    },
})
}
uaered={
  fast:'',
  last:'',
  address:'',
  email:'',
  gender:''
}


  valusend(val){
   this.uaered.fast = val.userditel.fast;
   this.uaered.last = val.userditel.last;
   this.uaered.address = val.address;
   this.uaered.email = val.email;
   this.uaered.gender = val.gender;
      console.log(this.uaered.fast);
      console.log(this.uaered.last);
      console.log(this.uaered.address);
      console.log(this.uaered.email);
      console.log(this.uaered.gender);
      console.log(val);
      this.myform.reset();
  }
  constructor( ) { }

  ngOnInit() {
   
  }

}
