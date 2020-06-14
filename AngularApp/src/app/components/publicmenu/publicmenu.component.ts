import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicmenu',
  templateUrl: './publicmenu.component.html',
  styleUrls: ['./publicmenu.component.css']
})
export class PublicmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toTelephone_SOS() {
    this.router.navigate(['/publicMenu/telephone']);
  }

  Institute() {
    this.router.navigate(['/publicMenu/institute']);
  }

  animal() {
    this.router.navigate(['publicMenu/animal']);
  }
  soslist() {
    this.router.navigate(['publicMenu/sos']);
  }

  First_Aid() {
    this.router.navigate(['publicMenu/firstAid']);
  }
  User() {
    this.router.navigate(['publicMenu/user']);
  }

}
