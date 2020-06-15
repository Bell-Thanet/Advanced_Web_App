import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status: any;
  token: string;

  constructor(private router:Router ,public local: LocalStorageService, private ps: NavbarService) { 
    try{
      this.token = this.local.get('user').token;
      this.ps.getAllProducts(this.token).subscribe(
        data => {
          this.status = data.message;
        },
        err => {
          this.router.navigate(['/login']);
        }
      );
  
    }catch(error){
      this.router.navigate(['/login']);
      console.log(error);
    }
  }

  ngOnInit(): void {

  }
  logout(){
    this.local.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }

}
