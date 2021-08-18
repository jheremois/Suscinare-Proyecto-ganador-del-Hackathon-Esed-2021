import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', component: ContractComponent, children: [
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
export class ContractRoutingModule { }
