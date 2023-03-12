import { Component } from '@angular/core';
import {Dog} from "../../shared/models/Dog";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent {
  name: string = "";
  height: number = 0;
  alive: string = "";

  dogs: Dog[] = [];

  addDog(dogForm: NgForm) {
    this.dogs.push(new Dog(0, this.name, this.height, this.alive == 'yes'));  // call createDog Service to create a new Dog.
    dogForm.reset();


    // After creating dog, navigate to Dog-Dashboard
  }
}
