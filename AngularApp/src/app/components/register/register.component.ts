import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { NavbarhideService } from 'src/app/services/navbarhide.service';
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

  constructor(private sign: RegisterService, public nav: NavbarhideService) { }

  ngOnInit(): void {
    this.nav.hide();
    
  }

  signup(){
    console.log(this.profileForm.value);
    this.sign.signUp(this.profileForm.value).subscribe(
      data => {
        alert('สมัครสมาชิกสำเร็จกรุณา Login เพื่อเข้าสู่ระบบ')
      }
    );
    this.profileForm.reset();
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



  

  

}
