import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  doggies: Dog[] = [];
  displayedColumns: string[] = ['name', 'heightInCm', 'isAlive'];

  dogName: string[] =["Caesar", "Shadow"];

  addRandomDog() {
    this.doggies = [...this.doggies, new Dog("Dalmier", 124, true)];
  }

  ngOnInit(): void {
    this.doggies = this.dogData();
  }

  title = "List of Dogs";

  dogData(): Dog[] {
    let dogs: Dog[] = [];

    dogs.push(new Dog("Jack", 120, true));
    dogs.push(new Dog("Julie", 110, false));

    return dogs;
  }
}
