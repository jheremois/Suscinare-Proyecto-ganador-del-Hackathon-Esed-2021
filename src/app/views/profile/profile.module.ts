import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { MaterialModule } from "@shared/material/material.module";
import { ComponentsModule } from "@shared/components/components.module";


@NgModule({
  declarations: [
    DetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class ProfileModule { }
