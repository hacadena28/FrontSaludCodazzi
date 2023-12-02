import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { PageDoctorComponent } from './page-doctor/page-doctor.component';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';
import {LayoutDoctorComponent} from "./layout-doctor/layout-doctor.component";
import {ComponentsModule} from "../../components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import {AppointmentService} from "../patient/shared/services/appointment.service";
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import {MatCardModule} from "@angular/material/card";
import { AgregarHistoriaClinicaComponent } from './agregar-historia-clinica/agregar-historia-clinica.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ConsultarMedicalHistoryComponent } from './consultar-medical-history/consultar-medical-history.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageDoctorComponent,
    ConsultarAgendaComponent,
    LayoutDoctorComponent,
    AgregarHistoriaClinicaComponent
    LayoutDoctorComponent,
    ConsultarMedicalHistoryComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ComponentsModule,
    MatIconModule,
    NgxPaginationModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentService, MdbModalService, DatePipe,
    SharedModule
  ]
})
export class DoctorModule { }
