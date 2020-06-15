import { Component, OnInit } from '@angular/core';
import { ItemAnimal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  items: ItemAnimal[];
  editStatus: boolean = false;
  itemToEdit: ItemAnimal;

  constructor(private item: AnimalService) { }

  ngOnInit(): void {

    this.item.getanimal().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

  deleteItem($event, id) {
    this.clearState();
    this.item.deleteItem(id).subscribe(
      data => {
        alert('Delete animal successfully')
      }
    );

  }

  editItem($event, item: ItemAnimal) {
    this.editStatus = true;
    this.itemToEdit = item;
  }

  updateItem(item: ItemAnimal) {
    this.item.updateItem(item).subscribe(
      data => {
        alert('Update animal successfully')
      }
    );
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.itemToEdit = null;
  }


}
