import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpsManagementComponent } from './eps-management/eps-management.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {EpsService} from "./eps-management/shared/service/eps.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from "ngx-pagination";
import {LayoutAdminComponent} from "./layout-admin/layout-admin.component";
import {SidebarAdminComponent} from "./sidebar-admin/sidebar-admin.component";
import {MatIconModule} from "@angular/material/icon";
import {PageAdminComponent} from "./page-admin/page-admin.component";
import { DoctorManagementComponent } from './doctor-management/doctor-management.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import {DoctorService} from "./doctor-management/shared/doctor.service";
import {UserService} from "./doctor-management/shared/user.service";
import { TableEpsComponent } from './eps-management/components/table-eps/table-eps.component';
import { FormCreateEpsComponent } from './eps-management/components/form-create-eps/form-create-eps.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    EpsManagementComponent,
    LayoutAdminComponent,
    SidebarAdminComponent,
    PageAdminComponent,
    TableEpsComponent,
    FormCreateEpsComponent,
    PageAdminComponent,
    DoctorManagementComponent,
    PatientManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatIconModule,
    ReactiveFormsModule,
    MdbModalModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [EpsService,DoctorService,UserService],
})
export class AdminModule { }
