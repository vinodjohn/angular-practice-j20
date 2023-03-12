import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dog} from "../models/Dog";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private DOG_BASE_URL = 'dog';
  constructor(private httpClient: HttpClient) { }

  public getAllDogs(): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(this.DOG_BASE_URL);
  }

  public deleteDog(id: number): Observable<Dog> {
    return this.httpClient.delete<Dog>(this.DOG_BASE_URL + "/" + id);
  }
}
