import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-paciente',
  templateUrl: './layout-paciente.component.html',
  styleUrls: ['./layout-paciente.component.scss']
})
export class LayoutPacienteComponent {



  constructor(private router:Router) {

  }


  navigateRegister(){
    this.router.navigate(['/paciente/registrar-cita'])
  }

  showModal(state:boolean){}
    state = true;
}
