import { Component, Input, OnInit } from '@angular/core';
import { cardListWork } from '@src/app/models/cardListWork.model';

@Component({
  selector: 'app-list-avatar-work',
  templateUrl: './list-avatar-work.component.html',
  styleUrls: ['./list-avatar-work.component.scss']
})
export class ListAvatarWorkComponent implements OnInit {
  @Input() data:cardListWork[] = []


  constructor() { }
  ngOnInit(): void {
  }

}
