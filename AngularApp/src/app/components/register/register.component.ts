import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    studentID: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  createUser(profileForm) {
    // this.auth.createUser(profileForm.value)
  }


  get email() {
    return this.profileForm.get('email');
  }
  get studentID() {
    return this.profileForm.get('studentID');
  }
  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }


  show: boolean = false;

  onClick() {
    if (this.profileForm.value.confirmPassword == this.profileForm.value.password) {
      this.show = false
    } else {
      this.show = true
    }
  }

  addtoDatabase() {
    if (this.profileForm.value.firstName != '' && this.profileForm.value.lastName != '' && this.profileForm.value.email != ''
      && this.profileForm.value.studentID != '' && this.profileForm.value.password != '' && this.profileForm.get('studentID').status == "VALID"
      && this.profileForm.get('email').status == "VALID" && this.profileForm.value.confirmPassword == this.profileForm.value.password
    ) {
      // this.auth.createUser(this.profileForm.value)
    }


  }

}
