import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PageDoctorComponent } from './page-doctor/page-doctor.component';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';
import {LayoutDoctorComponent} from "./layout-doctor/layout-doctor.component";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    PageDoctorComponent,
    ConsultarAgendaComponent,
    LayoutDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ComponentsModule,
  ]
})
export class DoctorModule { }
