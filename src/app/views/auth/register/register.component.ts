import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgForm } from "@angular/forms";
import { UserModel } from "@models/user.model";
import { UserService } from "@src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel

  formGroup: FormGroup

  inputType = 'password'
  inputType2 = 'password'

  passwordVisibility = true
  passwordVisibility2 = true

  constructor( private formBuild: FormBuilder, private auth: UserService, private router: Router) { }

  ngOnInit() : void {
    this.createForm()
  }

  ShowPassword(){
    this.passwordVisibility = !this.passwordVisibility

    this.passwordVisibility === true? this.inputType = 'password': this.inputType = 'text'
  }

  ShowPassword2(){
    this.passwordVisibility2 = !this.passwordVisibility2

    this.passwordVisibility2 === true? this.inputType2 = 'password': this.inputType2 = 'text'
  }

  createForm(){
    this.formGroup = this.formBuild.group({
      email:    [''],
      password: [''],
    })
  }

  submit(){
    console.log(this.formGroup.value)

    this.auth.signup(this.formGroup.value).subscribe(
      (response) => {
        console.log(response)
        this.auth.login(this.formGroup.value).subscribe(
          (response) => {
            console.log();
            this.router.navigateByUrl(`/zt/profile/${response}`)
          },
          (error) => console.log(error)
        )
      },
      (error) => console.log(error)
    )

    
  }

}