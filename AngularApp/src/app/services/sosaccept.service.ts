import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Sosaccept } from '../models/sosaccept';
@Injectable({
  providedIn: 'root'
})
export class SosacceptService {
  sosaccItem: any;
  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readAcceptSOS').pipe(map(data => {
      if (data) {
        this.sosaccItem = data;
        console.log(this.sosaccItem);
      }
      return this.sosaccItem;
    }))
  }

  addItem(item: Sosaccept) {

  }
  
  deleteItem(item: Sosaccept) {

  }

  updateItem(item: Sosaccept) {

  }
}
