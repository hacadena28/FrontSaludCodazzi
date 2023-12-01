import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PagePatientComponent } from './page-patient/page-patient.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import { ComponentsModule } from "../../components/components.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagePatientComponent,
    RegistrarCitaComponent,
    ConsultarCitaComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class PatientModule { }
