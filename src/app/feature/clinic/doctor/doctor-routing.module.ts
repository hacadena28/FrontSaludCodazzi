import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageDoctorComponent} from "./page-doctor/page-doctor.component";

const routes: Routes = [
  { path: 'agenda', component: PageDoctorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
