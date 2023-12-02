import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-doctor',
  templateUrl: './layout-doctor.component.html',
  styleUrls: ['./layout-doctor.component.scss']
})
export class LayoutDoctorComponent {
  router = inject(Router);
  navigateHome(){
    this.router.navigate(['home'])
  }


}
