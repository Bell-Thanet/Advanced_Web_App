import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ItemTelephone } from '../models/telephone';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  telephoneItem: any;

  constructor(private http: HttpClient) { }



  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readTelephone').pipe(map(data => {
      if (data) {
        this.telephoneItem = data;
        console.log(this.telephoneItem);
      }
      return this.telephoneItem;
    }))
  }


  addItem(item:ItemTelephone) {
    console.log(item)
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/createTelephone', item)
  }

  deleteItem(item: any) {
  console.log(item)
  return this.http.delete<any>('http://localhost:5001/sutcanhelp/us-central1/app//api/deleteTelephone'+`/${item}`)
  }

  updateItem(item: ItemTelephone) {
   
  }
}
