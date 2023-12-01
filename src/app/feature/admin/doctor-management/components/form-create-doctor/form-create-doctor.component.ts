import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {DoctorService} from "../../shared/Services/doctor.service";

 @Component({
   selector: 'app-form-create-doctor',
   templateUrl: './form-create-doctor.component.html',
   styleUrls: ['./form-create-doctor.component.scss']
 })
 export class FormCreateDoctorComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    public modalRef: MdbModalRef<FormCreateDoctorComponent>
  ) {
    this.builderForms();
  }

  builderForms() {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  registerDoctor() {
    if (this.formulario.valid) {
      this.doctorService.post(this.formulario.value.name).subscribe(
        (result) => {
          alert('Doctor creada exitosamente');
        },
        () => {
          alert('No se pudo crear la Doctor, contacta al administrador');
        }
      );
    }
  }
}

