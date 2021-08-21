import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasComponent } from './entradas.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '', component: EntradasComponent, children: [
      { path: '', component: MainComponent },

      {path:'',pathMatch:'full',redirectTo:''},
      {path:'**',pathMatch:'full',redirectTo:''},
    ],

  },
  {path:'',pathMatch:'full',redirectTo:''},
  {path:'**',pathMatch:'full',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }
