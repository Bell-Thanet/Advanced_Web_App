import { Component, OnInit } from '@angular/core';
import { ItemFirstAid } from 'src/app/models/firstaid';
import { FirstaidService } from 'src/app/services/firstaid.service';

@Component({
  selector: 'app-firstaid',
  templateUrl: './firstaid.component.html',
  styleUrls: ['./firstaid.component.css']
})
export class FirstaidComponent implements OnInit {
  items: ItemFirstAid[];
  editStatus: boolean = false;
  itemToEdit: ItemFirstAid;
  constructor(private item: FirstaidService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

  deleteItem($event, item: ItemFirstAid) {
    this.clearState();
    this.item.deleteItem(item).subscribe(
      data => {
        alert('Create your account successfully')
      }
    );

  }

  editItem($event, item: ItemFirstAid) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  // updateItem(item: ItemFirstAid) {
  //   this.item.updateItem(item);
  //   this.clearState();
  // }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }

}
