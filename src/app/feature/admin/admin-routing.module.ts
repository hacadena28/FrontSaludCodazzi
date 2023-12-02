import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpsManagementComponent} from "./eps-management/eps-management.component";
import {PageAdminComponent} from "./page-admin/page-admin.component";
import {DoctorManagementComponent} from "./doctor-management/doctor-management.component";
import {PatientManagementComponent} from "./patient-management/patient-management.component";
import {AdminManagementComponent} from "./admin-management/admin-management.component";
import {UserManagementComponent} from "./user-management/user-management.component";

const routes: Routes = [
  {
    path: '',
    component: PageAdminComponent,
    children: [
      {path: 'eps', component: EpsManagementComponent},
      {path: 'doctor', component: DoctorManagementComponent},
      {path: 'patient', component: PatientManagementComponent},
      {path: 'admin', component: AdminManagementComponent},
      {path: 'user', component: UserManagementComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
