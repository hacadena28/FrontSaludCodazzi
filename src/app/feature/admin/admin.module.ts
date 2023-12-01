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



@NgModule({
  declarations: [
    EpsManagementComponent,
    LayoutAdminComponent,
    SidebarAdminComponent,
    PageAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatIconModule
  ],
  providers: [EpsService],
})
export class AdminModule { }
