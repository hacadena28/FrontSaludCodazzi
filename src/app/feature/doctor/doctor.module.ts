import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PageDoctorComponent } from './page-doctor/page-doctor.component';
import { ComponentsModule } from '../components/components.module';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';


@NgModule({
  declarations: [
    PageDoctorComponent,
    ConsultarAgendaComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ComponentsModule
  ]
})
export class DoctorModule { }
