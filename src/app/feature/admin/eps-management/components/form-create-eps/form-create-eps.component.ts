import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EpsService} from "../../shared/service/eps.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-form-create-eps',
  templateUrl: './form-create-eps.component.html',
  styleUrls: ['./form-create-eps.component.scss']
})
export class FormCreateEpsComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private epsService: EpsService,
    public modalRef: MdbModalRef<FormCreateEpsComponent>
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

  registerEPS() {
    if (this.formulario.valid) {
      this.epsService.post(this.formulario.value.name).subscribe(
        (result) => {
          alert('EPS creada exitosamente');
        },
        () => {
          alert('No se pudo crear la EPS, contacta al administrador');
        }
      );
    }
  }
}
