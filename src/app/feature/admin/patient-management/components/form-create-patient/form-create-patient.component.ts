import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {PatientService} from "../../shared/Services/patient.service";

@Component({
  selector: 'app-form-create-patient',
  templateUrl: './form-create-patient.component.html',
  styleUrls: ['./form-create-patient.component.scss']
})
export class FormCreatePatientComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    public modalRef: MdbModalRef<FormCreatePatientComponent>
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

  registerPatient() {
    if (this.formulario.valid) {
      this.patientService.post(this.formulario.value.name).subscribe(
        (result) => {
          alert('Patient creada exitosamente');
        },
        () => {
          alert('No se pudo crear la Patient, contacta al administrador');
        }
      );
    }
  }
}

