import { Component } from '@angular/core';
interface doctor{
  id: number,
  firstname: string,
  secondName: string,
  firstLasName: string,
  secondlastName: string,
  profession: string
}
@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.scss']
})
export class RegistrarCitaComponent {
  doctors: any[]=[];
  registrarCita(){}
}
