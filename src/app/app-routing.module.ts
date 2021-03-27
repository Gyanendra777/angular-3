import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjuctComponent } from './projuct/projuct.component';
import { ComputerComponent } from './projuct/computer/computer.component';
import { RamComponent } from './projuct/computer/ram/ram.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'product', component:ProjuctComponent},
  {path: 'product/:id', component:ComputerComponent, children:[
      {path: ':id', component:RamComponent}
  ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
