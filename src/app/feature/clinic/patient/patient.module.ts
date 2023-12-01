import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PagePatientComponent } from './page-patient/page-patient.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    PagePatientComponent,
    RegistrarCitaComponent,
    ConsultarCitaComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ComponentsModule
  ]
})
export class PatientModule { }
