import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { MainComponent} from './pages/main/main.component'
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [
    MainComponent,
    EstadisticasComponent,
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class EstadisticasModule { }
