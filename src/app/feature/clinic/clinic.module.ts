import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'patient', loadChildren:() => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'doctor', loadChildren:() => import('./doctor/doctor.module').then(m => m.DoctorModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [TestComponent]
})
export class ClinicModule { }
