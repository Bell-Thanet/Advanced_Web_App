import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  
  constructor(private router:Router, private auth: LoginService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
  signin(){
    console.log(this.login.value);
    this.auth.signIn(this.login.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/menu']);
        }else{
          alert('Username or Password is incorrect!');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect!');
      });
  }
  
}
