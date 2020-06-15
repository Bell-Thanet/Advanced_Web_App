import { Component, OnInit } from '@angular/core';
import { ItemFirstAid } from 'src/app/models/firstaid';
import { FirstaidService } from 'src/app/services/firstaid.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-firstaid',
  templateUrl: './add-firstaid.component.html',
  styleUrls: ['./add-firstaid.component.css']
})
export class AddFirstaidComponent implements OnInit {
  item: ItemFirstAid = {
    Image: '',
    Title: '',
    detal: [],
    ImagePath: '',
  }

  detalnew: string;
  file: File;

  constructor(private additem: FirstaidService,private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  addtodatabase() {
    console.log('********************1');

    if (
      // this.item.Image == '' || this.item.ImagePath == '' || 
      this.item.Title == '' || this.item.detal.length == 0) {
      alert('ใส่ข้อมูลไม่ครบ')
    } else {
      this.additem.addItem(this.item).subscribe(
        data => {
          alert('Create your account successfully')
        }
      );
      this.item.Image = '';
      this.item.Title = '';
      this.item.detal = [];
      this.item.ImagePath = '';
    }
  }

  addtoarray() {
    if (this.detalnew != null)
      this.item.detal.push(this.detalnew)
    this.detalnew = null
  }

  deleteItem($event, item) {
    console.log(item);
    this.item.detal.splice(item, 1)
  }

  async feature(event: any) {

    const file: File = event.target.files[0];
    console.log("Selected filename: ", file.name)

    const metaData = { 'contentType': file.type }

    const storageRef: firebase.storage.Reference = firebase.storage().ref().child(`/FirstAid/${file.name}`);

    setTimeout(() => {
      const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
      setTimeout(() => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.item.Image = downloadURL;
          this.item.ImagePath = storageRef.fullPath
          console.log('Sucess')
          console.log(this.item.Image)
        }).catch(e => {
          alert(e);
        })
      }, 3000);
    }, 1000);

    console.log("Upload: ", file.name)
    console.log("Upload: ", storageRef.fullPath)

  }

}
