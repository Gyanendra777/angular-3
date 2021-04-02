import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';
import { Ngstyle } from './ngstyle';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
styleclasssss = new Ngstyle() 
  cssArray=[
  'red',
  'size20'
];
  cssArrays={
  'red':true,'size20':false
}
td:boolean=false
    customers:Customer[]=[
      {name:'rajue dravid',address:'',city:'delhi',state:'karnataka',country:'india'},
      {name:'Rahuld dravid',address:'',city:'vanarish',state:'lakhhanu',country:'india'},
      {name:'mubark dravid',address:'',city:'mitia',state:'delhi',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
      {name:'gyanendra dravid',address:'',city:'kchhwa',state:'bumbia',country:'india'},
    ]


  constructor() { } 

  ngOnInit(): void {
  }

}
