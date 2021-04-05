import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule,  } from './about-routing.module';
import { Contant3Component } from './contant3/contant3.component';
import { ContantComponent } from './contant/contant.component';
import { Contant2Component } from './contant2/contant2.component';
import { MateriaModule } from '../material/materia/materia.module';

console.log('hello worder in lagy loding')
@NgModule({
  declarations: [   
    Contant3Component,
    Contant2Component,
    ContantComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MateriaModule,

  ],

  
})
export class AboutModule { }
