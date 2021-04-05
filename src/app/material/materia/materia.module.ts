import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule, 
    MatMenuModule
  ],
  exports: [ 
    MatButtonModule,
    MatCardModule, 
    MatMenuModule
     ],
})
export class MateriaModule { }
