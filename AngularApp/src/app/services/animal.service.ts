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
  addItem(item: ItemAnimal) {
    console.log(item)
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/createAnimalList', item)
  }

  deleteItem(item: any) {
    console.log(item)
    return this.http.delete<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/deleteAnimalList/${item}`)
  }

  updateItem(item: any) {
    console.log(item)
    return this.http.put<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/updateAnimalList/${item.id}`, item)
  }



}
