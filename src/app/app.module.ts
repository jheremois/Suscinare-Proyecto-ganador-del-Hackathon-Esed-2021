import { RedComponent } from './views/red/red.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "@shared/material/material.module";
import { ComponentsModule } from "@shared/components/components.module";
import { EntradasComponent } from './views/entradas/entradas.component';
import { MyContractsComponent } from './views/my-contracts/my-contracts.component';


@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    MyContractsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
