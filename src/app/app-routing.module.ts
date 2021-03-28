import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';
import { ProductComponent } from './product/product.component';
import { LeptapComponent } from './product/leptap/leptap.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { RameComponent } from './product/rame/rame.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contant', component: ContantComponent },
  { path: 'product',component: ProductComponent, children:[
    // { path: '', component: ProductComponent},
    { path: 'laptop', component: LeptapComponent },
    { path: 'tablet', component: TabletComponent },
    { path: 'Mobile', component: MobileComponent },
    { path: 'rame', component: RameComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
