import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '@src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  formGroup: FormGroup

  constructor( private formBuild: FormBuilder, private _user: UserService ) { }

  user: any = 'aglo'

  ngOnInit(): void {
    this._user.user_data().subscribe(
      (res: any) => {
        console.log(res)
        this.user = res.data._id
      },
      (error) => console.log(error)
    )

    this.createForm()
  }

  createForm(){
    this.formGroup = this.formBuild.group({
      rol:     [ '', [ Validators.required ] ],
    })
  }

  send(){
    console.log(this.formGroup);
  }


}
