import { MainComponent } from './pages/main/main.component';
import { MyContractsComponent } from './my-contracts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MyContractsComponent, children: [
      { path: '', component: MainComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyContractsRoutingModule { }
