import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DetailComponent,
      },
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
