import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ItemFirstAid } from '../models/firstaid';

@Injectable({
  providedIn: 'root'
})
export class FirstaidService {
  firstaidItem: any;
  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readFirst_Aid').pipe(map(data => {
      if (data) {
        this.firstaidItem = data;
        console.log(this.firstaidItem);
      }
      return this.firstaidItem;
    }))
  }


  addItem(item: ItemFirstAid) {
    console.log(item)
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/createFirst_Aidt', item)
  }

  deleteItem(item: any) {
    console.log(item)
    return this.http.delete<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/deleteFirst_Aid/${item}`)
  }
}
