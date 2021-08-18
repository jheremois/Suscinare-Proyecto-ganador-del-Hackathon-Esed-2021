import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from '@shared/components/components.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ComponentsModule,

  ]
})
export class ContractModule { }
