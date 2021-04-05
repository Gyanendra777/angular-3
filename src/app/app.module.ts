import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaModule } from './material/materia/materia.module';
import { FormModule } from './forms/form/form.module';
import { ManeComponent } from './mane/mane/mane.component';
// import { AboutModule } from './about/about.module';

console.log('hello app.module loding')
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ManeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormModule,
    MateriaModule,
    // AboutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
