import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjuctComponent } from './projuct/projuct.component';
import { ComputerComponent } from './projuct/computer/computer.component';
import { RamComponent } from './projuct/computer/ram/ram.component';
const routes: Routes = [

  {
    path: 'product', component: ProjuctComponent, children: [
      // {path: '',component: ProjuctComponent},
      {
        path: ':id', component: ComputerComponent, children: [
          // { path: '', component: ComputerComponent },
          { path: ':id', component: RamComponent }
        ]
      }
    ]
  },
  // { path: 'product/:id', component: ComputerComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
