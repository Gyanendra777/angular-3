import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contant3Component } from './contant3/contant3.component';
import { ContantComponent } from './contant/contant.component';
import { Contant2Component } from './contant2/contant2.component';
const routes: Routes = [
      { path:'',component: Contant2Component },
      { path: 'ContantComponent', component: ContantComponent },
      { path: 'ContantComponent3', component: Contant3Component },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
// export const routingComponents2 = [MateriaModule,Contant3Component,Contant2Component]
