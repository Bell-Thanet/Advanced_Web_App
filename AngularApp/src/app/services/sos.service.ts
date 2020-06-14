import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Itemsoslist } from '../models/sos';

@Injectable({
  providedIn: 'root'
})
export class SosService {
  sosItem: any;
  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readSosList').pipe(map(data => {
      if (data) {
        this.sosItem = data;
        console.log(this.sosItem);
      }
      return this.sosItem;
    }))
  }


  addItem(item: Itemsoslist) {
   
  }

  deleteItem(item: Itemsoslist) {
  
  }

  updateItem(item: Itemsoslist) {
   
  }
}
