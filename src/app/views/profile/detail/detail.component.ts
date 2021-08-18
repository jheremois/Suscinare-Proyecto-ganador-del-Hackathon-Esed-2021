import { Component, OnInit } from '@angular/core';
import { UserService } from '@src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _user: UserService) { }

  ngOnInit(): void {

  }

}
