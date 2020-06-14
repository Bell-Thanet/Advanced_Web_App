import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { ItemAnimal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalItem: any;

  constructor(private http: HttpClient) { }


  getanimal() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readAnimalList').pipe(map(data => {
      if (data) {
        this.animalItem = data;
        console.log(this.animalItem);
      }
      return this.animalItem;
    }))
  }

  deleteItem(id) {
    console.log(id)
    // return this.http.delete('http://localhost:5001/sutcanhelp/us-central1/app/api/deleteAnimalList/fcaUytQ37hYMng2aPin6')
    return this.http.delete<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/deleteAnimalList/gjp2EXEnkMLCN5HCa8fD');

  }

  updateItem(item: ItemAnimal) {

  }


}
