import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from "@env/environment";
import { DatePipe } from '@angular/common';


interface Doctor {
  id: number;
  name: string;
}

interface Cita {
  appointmentStartDate: Date | any;
  type: string;
  description: string;
  patientId: string;
  doctorId: string;
}


@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.scss']
})
export class RegistrarCitaComponent implements OnInit {
  formulario!: FormGroup;
  doctors: Doctor[] = [];
  horasIntermedias: string[] = [];
  typeAppointmentOptions: any[] = [{ value: 'General', name: 'General' }, { value: 'Specialized', name: 'Especializada' }];

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);
  datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.builderForm();
    this.getDoctores();


  }

  builderForm() {
    let userDataLocal = localStorage.getItem('user')
    let user = JSON.parse(userDataLocal || '');
    this.formulario = this.formBuilder.group({
      type: ['', Validators.required],
      appointmentStartDate: ['', Validators.required],
      doctorId: ['', Validators.required],
      description: ['', Validators.required],
      userId: [user.userId],
    });
  }

  getDoctores() {
    this.http.get<Doctor[]>(`${environment.appUrl}doctor/all`)
      .subscribe(data => {
        this.doctors = data;
      });

  }

  generarHorasIntermedias() {
    // Esto es el horario de oficina
    const horaInicial = 8;
    const horaFinal = 17;
    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto of ['00', '30']) {
        this.horasIntermedias.push(`${hora}:${minuto}`);
      }
    }
  }

  registrarCita() {
    if (this.formulario) {
      const cita: Cita = this.formulario.value;
      cita.appointmentStartDate = this.datePipe.transform(cita.appointmentStartDate, 'yyyy-MM-ddTHH:mm:ss');

      this.http.post(`${environment.appUrl}appointment`, cita)
        .subscribe(response => {
          console.log('Cita registrada exitosamente:', response);
          alert('Cita registrada exitosamente'); 
        });
    }
  }
}
