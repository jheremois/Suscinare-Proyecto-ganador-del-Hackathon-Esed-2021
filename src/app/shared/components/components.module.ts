import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@shared/material/material.module";
import { TooltipComponent } from './tooltip/tooltip.component';

const components = [
  TooltipComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }