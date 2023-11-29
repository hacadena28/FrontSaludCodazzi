import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDoctorComponent } from './page-doctor/page-doctor.component';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';

const routes: Routes = [
  {
    path: '',
    component: PageDoctorComponent,
    children: [
      { path: 'consultar-agenda', component: ConsultarAgendaComponent},
      { path: '', redirectTo: 'consultar-agenda', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
