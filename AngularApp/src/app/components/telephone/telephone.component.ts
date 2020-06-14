import { Component, OnInit } from '@angular/core';
import { ItemTelephone } from 'src/app/models/telephone';
import { TelephoneService } from 'src/app/services/telephone.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
  items: ItemTelephone[];
  editStatus: boolean = false;
  itemToEdit: ItemTelephone;
  constructor(private item: TelephoneService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }





  deleteItem($event, item: any) {
    this.clearState();
    this.item.deleteItem(item);

  }

  editItem($event, item: ItemTelephone) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: ItemTelephone) {
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
