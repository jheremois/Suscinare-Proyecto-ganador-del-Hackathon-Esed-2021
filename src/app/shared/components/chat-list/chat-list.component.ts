import { Component, OnInit, Input } from '@angular/core';

import { messageInfo } from '@src/app/models/messageinfo.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Input() data: messageInfo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
