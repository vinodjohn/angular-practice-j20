import { Component } from '@angular/core';
import {Dog} from "./shared/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  showContent = false;

  dogTitle = "List of Dogs";

  dogData(): Dog[] {
    let dogs: Dog[] = [];

    dogs.push(new Dog("Jack", 120, true));
    dogs.push(new Dog("Julie", 110, false));

    return dogs;
  }
}
