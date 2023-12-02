import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageDoctorComponent} from "./page-doctor/page-doctor.component";
import {ConsultarMedicalHistoryComponent} from "./consultar-medical-history/consultar-medical-history.component";
import {ConsultarAgendaComponent} from "./consultar-agenda/consultar-agenda.component";

const routes: Routes = [
  {
    path: '',
    component: PageDoctorComponent,
    children: [
      {path: '', redirectTo: 'agenda', pathMatch: 'full'},
      {path: 'agenda', component: ConsultarAgendaComponent},
      {path: 'historial-medico', component: ConsultarMedicalHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule {
}
