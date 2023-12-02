import {Component, inject, Input, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {AppointmentDTO} from "../shared/interfaces/appointment";
import {AppointmentService} from "../shared/services/appointment.service";
import {ChangeInfoAppointment} from "../shared/services/chage-info-appointment.service";

@Component({
  selector: 'app-reagendar-cita',
  templateUrl: './reagendar-cita.component.html',
  styleUrls: ['./reagendar-cita.component.scss']
})
export class ReagendarCitaComponent implements OnInit{
  @Input() appointment!: AppointmentDTO;
  constructor(public modalRef: MdbModalRef<ReagendarCitaComponent>, private changeInfoAppointment: ChangeInfoAppointment) {

  }
  formBuilder = inject(FormBuilder);
  appointmentService = inject(AppointmentService);
  formulario!: FormGroup;
  datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.builderForm();
  }

  builderForm() {
    this.formulario = this.formBuilder.group({
      appointmentStartDate: [this.appointment.appointmentStartDate, Validators.required],
    });
  }
  cerrar() {
    this.modalRef.close(false);
  }
  reagendarCita() {
    if (!this.formulario.valid){
      alert("Llene todos los campos del formulario");
      return;
    }

    if (this.formulario.value.appointmentStartDate === this.appointment.appointmentStartDate){
      alert("no se puede actualizar por que la cita es la misma fecha")
      return;
    }

    if (this.formulario.value.appointmentStartDate < this.appointment.appointmentStartDate){
      alert("La fecha seleccionada no puede ser menor a la actual")
      return;
    }

    let date = this.datePipe.transform(this.formulario.value.appointmentStartDate, 'yyyy-MM-ddTHH:mm:ss');
    this.appointmentService.reagendarCita({id: this.appointment.id, state: "Rescheduled", newDate: date}).subscribe((result)=> {
      this.changeInfoAppointment.emitirEvento("CHAGE_DATA");
      this.modalRef.close(true);
    }, () => {
      alert("Por favor ajuste la fecha, debido a que debe ser horario de oficina");
    })
  }
}
