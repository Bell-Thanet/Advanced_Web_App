import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // if (this.item.animalList != '') {
    //   this.additem.addItem(this.item);
    //   this.item.animalList = '';

    //   console.log(this.item.animalList);
    // } else {
    //   alert('ใส่ข้อมูลไม่ครบ')
    // }
  }
}
