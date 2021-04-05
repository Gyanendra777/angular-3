import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './cheader/header/header.component';
import { ManeComponent } from './mane/mane/mane.component';

  
const routes: Routes = [
  { path: 'mane', component: ManeComponent },
   { path: 'contant2', loadChildren:()=>import('./about/about.module').then(m => m.AboutModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,ManeComponent]
