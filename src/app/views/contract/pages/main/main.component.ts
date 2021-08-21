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
      {
        empresa: 'Suscinare inc',
        actividad_comercial: 'Manejo de redes',
        paquetes: '7 Paquetes de servicios',
        empresas: ['image5.png', 'image4.png', 'image2.png']
      },
      {
        empresa: 'Shuniata',
        actividad_comercial: 'Desarrollo mobile',
        paquetes: '12 Paquetes de servicios',
        empresas: ['image5.png', 'image4.png', 'image2.png', 'image3.png',]
      },
      {
        empresa: 'Version Do',
        actividad_comercial: 'Desarrollo web',
        paquetes: '8 Paquetes de servicios',
        empresas: ['image3.png', 'image5.png',]
      },
      {
        empresa: 'Esed inc.',
        actividad_comercial: 'Finansas',
        paquetes: '4 Paquetes de servicios',
        empresas: ['image5.png', 'image2.png', 'image3.png',]
      },

    ]
  }

}
