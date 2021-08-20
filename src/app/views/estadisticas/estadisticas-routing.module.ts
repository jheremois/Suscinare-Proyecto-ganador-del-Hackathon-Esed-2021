import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './estadisticas.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {
    path: '', component: EstadisticasComponent, children: [
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
export class EstadisticasRoutingModule { }
