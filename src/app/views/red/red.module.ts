import { ComponentsModule } from '@shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

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
    MatChipsModule,
    MatIconModule
  ]
})
export class RedModule { }
