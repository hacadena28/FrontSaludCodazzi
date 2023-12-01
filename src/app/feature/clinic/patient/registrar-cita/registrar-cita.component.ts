import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from "@env/environment";

interface Doctor {
  id: number;
  name: string;
}

interface Cita {
  appointmentStartDate: Date;
  type:                 string;
  description:          string;
  patientId:            string;
  doctorId:             string;
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
  typeAppointmentOptions: any[] = [{value: 'General', name:'General'}, {value: 'Specialized', name:'Especializada'}];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.builderForm();
    this.getDoctores();
  }

  ngOnInit(): void {
  }

  builderForm() {
    this.formulario = this.formBuilder.group({

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
    // Aquí puedes agregar la lógica para procesar la cita
    console.log('Cita registrada:', this.formulario.value);
  }
}
