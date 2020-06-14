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
    this.router.navigate(['/publicMenu/telephone_SOS']);
  }

  Institute() {
    this.router.navigate(['/publicMenu/institute']);
  }

  animal() {
    this.router.navigate(['publicMenu/animalList']);
  }
  soslist() {
    this.router.navigate(['publicMenu/soslist']);
  }

  First_Aid() {
    this.router.navigate(['publicMenu/First_Aidlist']);
  }
  User() {
    this.router.navigate(['publicMenu/User']);
  }

}
