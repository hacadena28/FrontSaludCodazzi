import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagePatientComponent} from "../patient/page-patient/page-patient.component";
import {ConsultarAgendaComponent} from "./consultar-agenda/consultar-agenda.component";

const routes: Routes = [
  {
    path: '',
    component: PagePatientComponent,
    children: [
      { path: 'agenda', component: ConsultarAgendaComponent },
      { path: '', redirectTo: 'agenda', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
