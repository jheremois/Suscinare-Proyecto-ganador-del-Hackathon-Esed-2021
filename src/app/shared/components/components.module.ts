import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@shared/material/material.module";
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListAvatarWorkComponent } from './list-avatar-work/list-avatar-work.component';
import { GraficComponent } from './grafic/grafic.component';
import { ChartsModule } from 'ng2-charts';


const components = [
  TooltipComponent,
  ListAvatarWorkComponent,
  GraficComponent,
]
const module = [
  ChartsModule
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ...module,
  ],
  exports: [
    ...components,
    ...module,

  ]
})
export class ComponentsModule { }
