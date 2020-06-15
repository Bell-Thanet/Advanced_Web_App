import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Iteminstitute } from '../models/institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  instituteItem: any;
  constructor(private http: HttpClient) { }


  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readInstitute').pipe(map(data => {
      if (data) {
        this.instituteItem = data;
        console.log(this.instituteItem);
      }
      return this.instituteItem;
    }))
  }

  addItem(item: Iteminstitute) {
    console.log(item)
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/createInstitute', item)
  }

  deleteItem(item: any) {
    console.log(item)
    return this.http.delete<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/deleteInstitute/${item}`)
  }

  updateItem(item: any) {
    console.log(item)
    return this.http.put<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/updateInstitute/${item.id}`, item)
  }
}
