
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {

@Input() hous:string="hello word";
conunt;
num:number=1;

  constructor( ) {console.log('constructor call -----11111111') }

  ngOnChanges(change:SimpleChanges){
    console.log('ngOnChanges -------222222222')
    console.log(change.hous.currentValue)
  }

  ngOnInit() {
    console.log("ngOnit call ----------3333333")
this.conunt = setInterval(() => {
  this.num = this.num + 1 ;
  console.log(this.num)
}, 1000);
  }

  ngDoCheck(){
    console.log("ngDoCheck call ----------44444444")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit call ----------555555555")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked call ----------66666666")
  }
  ngAfterViewInit(){
    console.log("ngAfterContentChecked call ----------77777777")
  }
  ngAfterViewChecked(){
    console.log("ngAfterContentChecked call ----------888888888")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy call ----------99999999999999999")
    clearInterval(this.conunt)
  }


}
