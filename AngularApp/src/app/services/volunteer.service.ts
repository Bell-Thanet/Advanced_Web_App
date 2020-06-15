import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Volunteer } from '../models/volunteer';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  volunteerItem: any;
  constructor(private http: HttpClient) { }


  getItem() {
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/readVolunteers').pipe(map(data => {
      if (data) {
        this.volunteerItem = data;
        console.log(this.volunteerItem);
      }
      return this.volunteerItem;
    }))
  }

  updateItem(item: any) {
    console.log(item)
    return this.http.put<any>(`http://localhost:5001/sutcanhelp/us-central1/app/api/updateVolunteers/${item.id}`, item)
  }

}
