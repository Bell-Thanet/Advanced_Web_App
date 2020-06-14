import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteermenu',
  templateUrl: './volunteermenu.component.html',
  styleUrls: ['./volunteermenu.component.css']
})
export class VolunteermenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toVolunteer() {
    this.router.navigate(['/volunteerMenu/volunteer']);
  }
  toSos() {
    this.router.navigate(['volunteerMenu/sos']);
  }
  Statis() {
    this.router.navigate(['volunteerMenu/statis']);
  }
}
