import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { ComponentsModule } from "@shared/components/components.module";
import { MaterialModule } from "@shared/material/material.module";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
