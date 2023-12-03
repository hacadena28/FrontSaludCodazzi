import {Component, inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppointmentDTO} from "../../patient/shared/interfaces/appointment";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {ChangeInfoAppointment} from "../../patient/shared/services/chage-info-appointment.service";
import {AppointmentService} from "../../patient/shared/services/appointment.service";
import {DatePipe} from "@angular/common";
import {ChangeInfoMedicalHistoryService} from "../shared/services/change-info-medical-history.service";

@Component({
  selector: 'app-agregar-historia-clinica',
  templateUrl: './agregar-historia-clinica.component.html',
  styleUrls: ['./agregar-historia-clinica.component.scss']
})
export class AgregarHistoriaClinicaComponent {
  @Input() id!: number;
  @Input() data!: AppointmentDTO;
  formulario: FormGroup;
  appointmentService = inject(AppointmentService);
  datePipe = inject(DatePipe);

  constructor(public modalRef: MdbModalRef<AgregarHistoriaClinicaComponent>, private changeInfoMedicalHistory: ChangeInfoMedicalHistoryService, private changeInfoAppointment: ChangeInfoAppointment, private fb: FormBuilder) {


    this.formulario = this.fb.group({
      description: ['', Validators.required],
      diagnosis: ['', Validators.required],
      treatment: ['', Validators.required]
    });
  }

  cerrar() {
    this.modalRef.close(false);
  }

  agregarHistoria() {

    if (this.formulario.valid) {
      this.appointmentService.reagendarCita({
        id: this.data.id,
        state: "Attended",
        newDate: this.data.appointmentStartDate
      }).subscribe((result) => {
        this.changeInfoAppointment.emitirEvento("CHAGE_DATA");
        this.modalRef.close(true);
        this.agregarHistoriaClinica();
      }, () => {
        alert("Por favor ajuste la fecha, debido a que debe ser horario de oficina");
      })
    } else {
      alert("llene todos los campos del formulario");
    }
  }

  agregarHistoriaClinica() {
    let data = {
      date: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      description: this.formulario.value.description,
      diagnosis: this.formulario.value.diagnosis,
      treatment: this.formulario.value.treatment,
      documentoNumber: this.data.doctorFullName,
    }
    this.appointmentService.agregarHistoriaClinica(data).subscribe((result) => {
      this.changeInfoAppointment.emitirEvento("CHAGE_DATA");
    }, () => {
      alert("Por favor ajuste la fecha, debido a que debe ser horario de oficina");
    })
  }


}
