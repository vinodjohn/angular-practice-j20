import {Component, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  sampleText = "Dog barks always!";

  doggies: Dog[] = [];
  displayedColumns: string[] = ['name', 'heightInCm', 'isAlive'];

  ngOnInit(): void {
    this.doggies = this.fetchDogData();
  }

  fetchDogData(): Dog[] {
    let dogs: Dog[] = [];

    dogs.push(new Dog("Jack", 120, true));
    dogs.push(new Dog("Julie", 110, false));

    return dogs;
  }

  addRandomDog() {
    this.doggies = [...this.doggies, new Dog("Dalmier", 124, true)];
  }
}
