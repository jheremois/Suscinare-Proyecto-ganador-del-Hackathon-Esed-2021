import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradasComponent } from './entradas.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    EntradasComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class EntradasModule { }
