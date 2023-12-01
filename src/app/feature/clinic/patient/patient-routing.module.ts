import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { PagePatientComponent } from './page-patient/page-patient.component';

const routes: Routes = [
  {
    path: '',
    component: PagePatientComponent,
    children: [
      { path: 'consultar-citas', component: ConsultarCitaComponent },
      { path: 'registrar-cita', component: RegistrarCitaComponent },
      { path: '', redirectTo: 'consultar-citas', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
