import { Component, OnInit } from '@angular/core';
import { messageInfo } from '../../../models/messageinfo.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tag = ["sin Leer","De tu red", "Nuevos", "Fuera de tu red", "Leidos"]
  public data:messageInfo[]
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        name: 'Suscinare inc',
        mail: 'Version@gmail.com',
        img: 'image5.png'
      },
      {
        name: 'Shuniata',
        mail: 'Versio2n@gmail.com',
        img: 'image5.png'
      },
      {
        name: 'Version Do',
        mail: 'Versio3@gmail.com',
        img: 'image3.png'
      },
      {
        name: 'Esed inc.',
        mail: 'Versio4n@gmail.com',
        img: 'image5.png'
      },
      {
        name: 'Suscinare inc',
        mail: 'Version@gmail.com',
        img: 'image5.png'
      },
      {
        name: 'Shuniata',
        mail: 'Versio2n@gmail.com',
        img: 'image5.png'
      },
      {
        name: 'Version Do',
        mail: 'Versio3@gmail.com',
        img: 'image3.png'
      },
      {
        name: 'Esed inc.',
        mail: 'Versio4n@gmail.com',
        img: 'image5.png'
      },

    ]
  }


}
