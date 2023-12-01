import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpsManagementComponent } from './eps-management/eps-management.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {EpsService} from "./eps-management/shared/service/eps.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    EpsManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
  ],
  providers: [EpsService],
})
export class AdminModule { }
