import { Component, OnInit } from '@angular/core';
import { Itemsoslist } from 'src/app/models/sos';
import { SosService } from 'src/app/services/sos.service';

@Component({
  selector: 'app-add-sos',
  templateUrl: './add-sos.component.html',
  styleUrls: ['./add-sos.component.css']
})
export class AddSosComponent implements OnInit {
  item: Itemsoslist = {
    sosList: '',
  }
  constructor(private additem: SosService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.item.sosList != '') {
      this.additem.addItem(this.item).subscribe(
        data => {
          alert('Add sos successfully')
        }
      );
      this.item.sosList = '';

      console.log(this.item.sosList);
    } else {
      alert('ใส่ข้อมูลไม่ครบ')
    }
  }

}
