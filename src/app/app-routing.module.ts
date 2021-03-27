import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';
import { ProductComponent } from './product/product.component';
import { LeptapComponent } from './product/leptap/leptap.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contant', component: ContantComponent },
  { path: 'product', children:[
    { path: '', component: ProductComponent},
    { path: 'laptop', component: LeptapComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
