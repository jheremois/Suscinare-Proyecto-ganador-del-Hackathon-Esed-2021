import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from "@views/dashboard/side-nav/side-nav.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SideNavComponent,
        children: [
          {
            path: 'perfil',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'estadisticas',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'entradas',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'mi-red',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'contrata',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'contratos',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: 'cartera',
            loadChildren: () => import('@views/profile/profile.module').then(m => m.ProfileModule)
          },
          {
            path: '**',
            redirectTo: 'perfil'
          }
        ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { } 