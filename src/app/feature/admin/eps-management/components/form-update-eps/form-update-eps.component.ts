import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EpsService} from "../../shared/service/eps.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {ChangeInfoEpsService} from "../../shared/service/chage-info-eps.service";
import {EpsDto} from "../../shared/models/eps-dto.interface";
import {data} from "autoprefixer";

@Component({
  selector: 'app-form-create-eps',
  templateUrl: './form-update-eps.component.html',
  styleUrls: ['./form-update-eps.component.scss']
})
export class FormUpdateEpsComponent implements OnInit{
  @Input() data: any;
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private epsService: EpsService,
    public modalRef: MdbModalRef<FormUpdateEpsComponent>,
    private changeInfoEpsService: ChangeInfoEpsService
  ) {
  }

  ngOnInit(): void {

    this.builderForms();
    }

  builderForms() {

    this.formulario = this.formBuilder.group({
      name: [this.data?.name || '' , Validators.required],
    });
  }

  close(): void {
    console.log(this.data);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  updateEPS() {

    if (this.formulario.valid) {
      this.epsService.put(this.data.id, this.formulario.value.name).subscribe(
        (result) => {
          this.changeInfoEpsService.emitirEvento("RECARGA_DATA");
          this.close();
          alert('EPS actualizada con exito');
        },
        () => {
          alert('No se pudo actualizar la EPS, contacta al administrador');
        }
      );
    }
  }

}
