import { businessInfo } from './../../../../models/businessContactCard.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public business: businessInfo[] = [];
  public tags = ['Tecnología', 'Medicina', 'Finanzas', 'Ventas', 'Diseño'];

  constructor() { }

  ngOnInit(): void {

    this.business = [
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      },
      {
        nombre: 'Version DO',
        ubicacion: 'La Romana',
        actividad_comercial: 'Tecnología',
        img_url: 'http://lorempixel.com/350/350/'
      }
    ]

  };

  removeTag(tag: string):void {
    let index = this.tags.indexOf(tag);
    if( index != -1 ){
      this.tags.splice(index, 1);
    }
  }

}
