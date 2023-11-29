import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full' },
  { path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'paciente', loadChildren:() => import('./patient/patient.module').then(m => m.PatientModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
