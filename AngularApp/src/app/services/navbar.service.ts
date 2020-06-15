import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  
  constructor(private http: HttpClient) { }
  getAllProducts(token: any){

    const headers = {'Authorization': token}
    return this.http.get<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/getlogin', {headers})
    .pipe(map(data=> {
      if(data){
        console.log(data);
        
      }
      return data;
    }));
  }
}
