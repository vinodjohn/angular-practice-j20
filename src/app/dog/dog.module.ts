import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDogFormComponent } from './update-dog-form/update-dog-form.component';
import {DogComponent} from "./dog.component";
import {DogFormComponent} from "./dog-form/dog-form.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UpdateDogFormComponent,
    DogComponent,
    DogFormComponent
  ],
  exports: [
    DogFormComponent,
    DogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DogModule { }
