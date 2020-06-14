import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  User: String

  constructor(private router: Router,public local: LocalStorageService) { }


  ngOnInit(): void {
    this.User = this.local.get('user').result.firstname+' '+this.local.get('user').result.lastname;
  }

  AdminVolunteer() {
    this.router.navigate(['/volunteerMenu']);
  }

  AdminPublic() {
    this.router.navigate(['/publicMenu']);
  }

}
