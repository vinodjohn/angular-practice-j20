import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DogModule} from "./dog/dog.module";
import {RouterModule, Routes} from "@angular/router";
import {DogComponent} from "./dog/dog.component";
import {DogFormComponent} from "./dog/dog-form/dog-form.component";
import {UpdateDogFormComponent} from "./dog/update-dog-form/update-dog-form.component";

const appRoutes: Routes = [
/*  {
    path: '',
    component: AppComponent
  },*/
  {
    path: 'dog',
    component: DogComponent
  },
  {
    path: 'create-dog',
    component: DogFormComponent
  },
  {
    path: 'update-dog',
    component: UpdateDogFormComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
