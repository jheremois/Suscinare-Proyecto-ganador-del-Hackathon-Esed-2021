import { Component, OnInit } from '@angular/core';
import { cardListWork } from '@src/app/models/cardListWork.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: cardListWork[] = [];
  public tag = ['Recomendados', 'En tu Red' ,'Nuevos', 'Cerca de Ti', 'Mas Activos']
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
      {empresa: 'Suscinare inc',actividad_comercial: 'Manejo de redes',empresas: ['image_3.png','image_4.png','image_6.png','image_8.png','image_10.png',]},
    ]
  }

}
