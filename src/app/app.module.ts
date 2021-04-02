import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { OutputingComponent } from './outputing/outputing.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChildComponent,
    Child2Component,
    ChildcomponentComponent,
    NgForComponent,
    OutputingComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
