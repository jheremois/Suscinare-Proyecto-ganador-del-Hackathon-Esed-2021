import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from '@shared/components/components.module';
import { ContractComponent } from './contract.component';



@NgModule({
  declarations: [
    ContractComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ComponentsModule,

  ]
})
export class ContractModule { }
