import { Component, OnInit } from '@angular/core';
import { ItemUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  items: ItemUser[];
  editStatus: boolean = false;
  itemToEdit: ItemUser;
  constructor(private item: UserService) { }

  ngOnInit(): void {
    this.item.getItem().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

  // deleteItem($event, item: ItemUser) {
  //   this.clearState();
  //   this.item.deleteItem(item).subscribe(
  //     data => {
  //       alert('Create your account successfully')
  //     }
  //   );

  // }

  editItem($event, item: ItemUser) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: ItemUser) {
    this.item.updateItem(item).subscribe(
      data => {
        alert('Update User successfully')
      }
    );
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }

}
