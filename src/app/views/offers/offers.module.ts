import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    OffersComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ComponentsModule
  ]
})
export class OffersModule { }
