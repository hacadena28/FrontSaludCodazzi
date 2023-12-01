import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-paciente',
  templateUrl: './layout-paciente.component.html',
  styleUrls: ['./layout-paciente.component.scss']
})
export class LayoutPacienteComponent {



  router = inject(Router);

  showModal(state:boolean){}
    state = true;
}
