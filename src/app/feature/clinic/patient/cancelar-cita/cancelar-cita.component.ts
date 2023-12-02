import {Component, inject, Input, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {AppointmentDTO} from "../shared/interfaces/appointment";
import {AppointmentService} from "../shared/services/appointment.service";
import {ChangeInfoAppointment} from "../shared/services/chage-info-appointment.service";

@Component({
  selector: 'app-reagendar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent{
  @Input() appointment!: AppointmentDTO;
  constructor(public modalRef: MdbModalRef<CancelarCitaComponent>, private changeInfoAppointment: ChangeInfoAppointment) {
  }
  appointmentService = inject(AppointmentService);

  cerrar() {
    this.modalRef.close(false);
  }
  cancelarCita() {
    this.appointmentService.reagendarCita({id: this.appointment.id, state: "Canceled", newDate: this.appointment.appointmentStartDate}).subscribe((result)=> {
      this.changeInfoAppointment.emitirEvento("CHAGE_DATA");
      this.modalRef.close(true);
    }, () => {
      alert("Por favor ajuste la fecha, debido a que debe ser horario de oficina");
    })
  }
}
