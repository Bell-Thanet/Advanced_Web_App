import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  signUp(authData: any){
    return this.http.post<any>('http://localhost:5001/sutcanhelp/us-central1/app/api/register', authData)
    
  }
}
