import { Component, OnInit } from '@angular/core';
import { Sosaccept } from 'src/app/models/sosaccept';
import { SosacceptService } from 'src/app/services/sosaccept.service';

@Component({
  selector: 'app-sosaccept',
  templateUrl: './sosaccept.component.html',
  styleUrls: ['./sosaccept.component.css']
})
export class SosacceptComponent implements OnInit {
  item1: Sosaccept[];
  editStatus: boolean = false;
  itemToEdit: Sosaccept;
  constructor(private item: SosacceptService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.item1 = items;
      console.log(items);
    })
  }
  deleteItem($event, item: Sosaccept) {
    this.clearState();
    this.item.deleteItem(item);

  }

  editItem($event, item: Sosaccept) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: Sosaccept) {
    this.item.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }

}
