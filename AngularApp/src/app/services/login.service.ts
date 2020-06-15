import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,public local: LocalStorageService) { }
  signIn(authData: any){
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/login', authData)
    .pipe(map(data => {
      if(data){
        this.local.set('user',data,1,'w');
        console.log(this.local.get('user'));
        
      }
      return data;
    }))
  }
}
