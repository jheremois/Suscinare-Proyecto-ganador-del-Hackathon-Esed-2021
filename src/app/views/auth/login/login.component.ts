import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@src/app/services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup

  usid: any

  inputType = 'password'

  passwordVisibility = true
  hide = false

  constructor( private formBuild: FormBuilder, private auth: UserService, private router: Router ) { }

  ngOnInit() : void {
    this.createForm()
  }

  ShowPassword(){
    this.passwordVisibility = !this.passwordVisibility

    this.passwordVisibility === true? this.inputType = 'password': this.inputType = 'text'
  }

  createForm(){
    this.formGroup = this.formBuild.group({
      email:    [''],
      password: [''],
    })
  }

  submit(){
    console.log(this.formGroup.value)
    this.auth.login(this.formGroup.value).subscribe(
      (response) => {
        console.log();
        this.router.navigateByUrl(`/zt/profile/${response}`)
      },
      (error) => console.log(error)
    )
  }

}