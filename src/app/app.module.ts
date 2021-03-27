import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjuctComponent } from './projuct/projuct.component';
import { ComputerComponent } from './projuct/computer/computer.component';
import { RamComponent } from './projuct/computer/ram/ram.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjuctComponent,
    ComputerComponent,
    RamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
