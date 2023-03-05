import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  @Input() title: string = "";
  @Input() dogs: Dog[] = [];

  doggies: Dog[] = [];
  displayedColumns: string[] = ['name', 'heightInCm', 'isAlive'];

  dogName: string[] =["Caesar", "Shadow"];

  addRandomDog() {
    this.doggies = [...this.doggies, new Dog("Dalmier", 124, true)];
  }

  ngOnInit(): void {
    this.doggies = this.dogs;
  }
}
