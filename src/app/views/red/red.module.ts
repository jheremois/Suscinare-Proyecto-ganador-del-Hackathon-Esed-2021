import { MaterialModule } from '@shared/material/material.module';
import { ComponentsModule } from '@shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedRoutingModule } from './red-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RedRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class RedModule { }
