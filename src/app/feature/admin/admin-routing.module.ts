import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpsManagementComponent} from "./eps-management/eps-management.component";

const routes: Routes = [
  { path: 'eps', component: EpsManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
