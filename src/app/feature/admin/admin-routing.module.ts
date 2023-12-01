import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpsManagementComponent} from "./eps-management/eps-management.component";
import {PageAdminComponent} from "./page-admin/page-admin.component";

const routes: Routes = [
  {
    path: '',
    component: PageAdminComponent,
    children: [
      { path: 'eps', component: EpsManagementComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
