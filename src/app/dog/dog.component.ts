import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";
import {DogService} from "../shared/services/dog.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  doggies: Dog[] = [];
  displayedColumns: string[] = ['id', 'name', 'heightInCm', 'isAlive', 'actions'];

  constructor(private dogService: DogService) {
  }
  ngOnInit(): void {
    this.dogService.getAllDogs().subscribe(value => this.doggies = value);
  }

  title = "List of Dogs";

  deleteDog(id: number) {
    this.dogService.deleteDog(id).subscribe(value => this.ngOnInit());
  }
}
