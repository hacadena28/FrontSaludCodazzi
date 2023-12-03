import {HttpClient} from '@angular/common/http';
import {Component, OnInit, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from "@env/environment";
import {DatePipe} from '@angular/common';


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
  hours = [
    {value: '08', name: "08 AM"}, {value: '09', name: "09 AM"}, {value: '10', name: "10 AM"}, {
      value: '11', name: "11 AM"
    }, {value: '12', name: "12 AM"}, {value: '02', name: "02 PM"}, {
      value: '03', name: "03 PM"
    }, {value: '04', name: "04 PM"}, {value: '05', name: "05 PM"}, {
      value: '06', name: "06 PM"
    }];
  minutes = ['00', '30'];
  typeAppointmentOptions: any[] = [{value: 'General', name: 'General'}, {value: 'Specialized', name: 'Especializada'}];

  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);
  datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.builderForm();
    this.getDoctores();

  }

  validateForm(): boolean {
    const form = this.formulario;
    for (const i in form.controls) {
      if (form.controls.hasOwnProperty(i)) {
        form.controls[i].markAsTouched();
        form.controls[i].updateValueAndValidity();
      }
    }
    return form.valid;
  }

  builderForm() {
    let userDataLocal = localStorage.getItem('user')
    let user = JSON.parse(userDataLocal || '');
    this.formulario = this.formBuilder.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      minute: ['', Validators.required],
      type: ['', Validators.required],
      doctor: ['', Validators.required],
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

  registrarCita() {
    if (this.formulario) {
      const date = this.formulario.get('date')!.value;
      const hour = this.formulario.get('hour')!.value;
      const minute = this.formulario.get('minute')!.value;
      const type = this.formulario.get('type')!.value;
      const description = this.formulario.get('description')!.value;
      const userId = this.formulario.get('userId')!.value;
      const doctorId = this.formulario.get('doctor')!.value;

      const appointmentStartDate = new Date(date + 'T' + hour + ':' + minute + ':00');

      const cita = {
        appointmentStartDate,
        type,
        description,
        userId,
        doctorId
      };


      this.http.post(`${environment.appUrl}appointment`, cita)
        .subscribe(response => {
          console.log('Cita registrada exitosamente:', response);
          alert('Cita registrada exitosamente');
        });
    }
  }
}
