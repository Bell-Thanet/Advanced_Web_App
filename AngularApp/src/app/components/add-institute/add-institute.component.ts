import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';
import { Iteminstitute } from 'src/app/models/institute';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {

  item: Iteminstitute = {

    // title: string;
    institute: '',
  }

  constructor(private additem: InstituteService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.item.institute != '') {
      console.log(this.item)
      this.additem.addItem(this.item).subscribe(
        data => {
          alert('Create your account successfully')
        }
      );
      this.item.institute = '';
    } else {
      alert('ใส่ข้อมูลไม่ครบ')
    }
    // if (this.item.institute != '') {
    //   this.additem.addItem(this.item);
    //   // this.item.Title = '';
    //   // this.item.phonenumber = '';
    //   // console.log(this.item.Title + '  ' + this.item.phonenumber);
    // }
  }

}
