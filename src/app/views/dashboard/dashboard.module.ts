import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { MaterialModule } from "@shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

import { ComponentsModule } from "@shared/components/components.module";
import { SideNavComponent } from "@views/dashboard/side-nav/side-nav.component";
import { HeaderComponent } from "@views/dashboard/header/header.component";


@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }