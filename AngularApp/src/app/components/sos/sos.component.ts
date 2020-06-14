import { Component, OnInit } from '@angular/core';
import { Itemsoslist } from 'src/app/models/sos';
import { SosService } from 'src/app/services/sos.service';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {
  items: Itemsoslist[];
  editStatus: boolean = false;
  itemToEdit: Itemsoslist;
  constructor(private item:SosService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }


  deleteItem($event, item: Itemsoslist) {
    this.clearState();
    this.item.deleteItem(item);

  }

  editItem($event, item: Itemsoslist) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: Itemsoslist) {
    this.item.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }

}
