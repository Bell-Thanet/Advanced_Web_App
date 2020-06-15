import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  item1: Volunteer[];
  editStatus: boolean = false;
  itemToEdit: Volunteer;
  constructor(private item: VolunteerService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.item1 = items;
      console.log(items);
    })
  }


  editItem($event, item: Volunteer) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: Volunteer) {
    this.item.updateItem(item).subscribe(
      data => {
        alert('Create your account successfully')
      }
    );
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }

}
