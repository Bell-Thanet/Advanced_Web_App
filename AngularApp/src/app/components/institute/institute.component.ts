import { Component, OnInit } from '@angular/core';
import { Iteminstitute } from 'src/app/models/institute';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {
  items: Iteminstitute[];
  editStatus: boolean = false;
  itemToEdit: Iteminstitute;
  constructor(private item: InstituteService) { }

  ngOnInit(): void {

    this.item.getItem().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

  deleteItem($event, item: any) {
    this.clearState();
    this.item.deleteItem(item).subscribe(
      data => {
        alert('Create your account successfully')
      }
    );

  }

  editItem($event, item: Iteminstitute) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: Iteminstitute) {
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
