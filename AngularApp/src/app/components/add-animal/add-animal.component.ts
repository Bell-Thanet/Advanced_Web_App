import { Component, OnInit } from '@angular/core';
import { ItemAnimal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  item: ItemAnimal = {
    animalList: ''
  }
  constructor(private additem: AnimalService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.item.animalList != '') {
      this.additem.addItem(this.item).subscribe(
        data => {
          alert('Create your account successfully')
        }
      );

      this.item.animalList = '';

      console.log(this.item.animalList);
    } else {
      alert('ใส่ข้อมูลไม่ครบ')
    }
  }
}
