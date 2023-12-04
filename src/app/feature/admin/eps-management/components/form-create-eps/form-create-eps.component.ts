import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EpsService} from "../../shared/service/eps.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {ChangeInfoEpsService} from "../../shared/service/chage-info-eps.service";

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
    public modalRef: MdbModalRef<FormCreateEpsComponent>,
    private changeInfoEpsService: ChangeInfoEpsService
  ) {
    this.builderForms();
  }

  builderForms() {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
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

  registerEPS() {
    if (this.formulario.valid) {
      this.epsService.post(this.formulario.value.name).subscribe(
        (result) => {
          this.changeInfoEpsService.emitirEvento("RECARGA_DATA");
          this.close();
          alert('EPS actualizada exitosamente');
        },
        () => {
          alert('No se pudo actualizar la EPS, contacta al administrador');
        }
      );
    }
  }
}
