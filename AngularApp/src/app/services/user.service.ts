import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ItemUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userItem: any;
  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readUsers').pipe(map(data => {
      if (data) {
        this.userItem = data;
        console.log(this.userItem);
      }
      return this.userItem;
    }))
  }


  addItem(item: ItemUser) {
   
  }

  deleteItem(item: ItemUser) {
  
  }

  updateItem(item: ItemUser) {
   
  }
}
