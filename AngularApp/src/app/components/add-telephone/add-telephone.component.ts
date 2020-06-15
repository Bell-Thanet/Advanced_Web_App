import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemTelephone } from 'src/app/models/telephone';
import { TelephoneService } from 'src/app/services/telephone.service';

@Component({
  selector: 'app-add-telephone',
  templateUrl: './add-telephone.component.html',
  styleUrls: ['./add-telephone.component.css']
})
export class AddTelephoneComponent implements OnInit {
  item: ItemTelephone = {
    Title: '',
    phonenumber: ''
  }
  newitem = new FormGroup({
    // Title: new FormControl('', [Validators.required]),
    newphonenumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),

  });

  get newphonenumber() {
    return this.newitem.get('newphonenumber');
  }
  get Title() {
    return this.newitem.get('Title');
  }
  constructor(private additem: TelephoneService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.newitem.value.newphonenumber != '' && this.newphonenumber.valid && this.newitem.value.Title != '') {



      this.item.phonenumber = this.newitem.value.newphonenumber;
      this.additem.addItem(this.item).subscribe(
        data => {
          alert('Add telephone successfully')
        }
      );
      // console.log(this.item.Title + '  ' + this.item.phonenumber);
      this.item.Title = '';
      this.item.phonenumber = '';

    } else {
      alert('ใส่ข้อมูลไม่ครบ')
    }
  }

}
