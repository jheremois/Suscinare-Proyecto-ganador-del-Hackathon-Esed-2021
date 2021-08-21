import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContractsRoutingModule } from './my-contracts-routing.module';
import { MainComponent } from './pages/main/main.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MyContractsRoutingModule,
    MatButtonModule
  ]
})
export class MyContractsModule { }
