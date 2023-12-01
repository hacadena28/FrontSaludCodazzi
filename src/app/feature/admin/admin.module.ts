import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpsManagementComponent } from './eps-management/eps-management.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {EpsService} from "./eps-management/shared/service/patient.service";



@NgModule({
  declarations: [
    EpsManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [EpsService],
})
export class AdminModule { }
