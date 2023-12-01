import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CreateUserPatient} from "../shared/models/create-patient.interface";
import {CreatePatientService} from "../shared/service/patient.service";
import {EpsDto} from "../../admin/eps-management/shared/models/eps-dto.interface";
import {EpsService} from "../../admin/eps-management/shared/service/eps.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  data: EpsDto[] = [];
  formulario!: FormGroup;
  abbreviationOptions: string[] = ['CC', 'TI', 'CE'];

  constructor(
    protected createPatientService: CreatePatientService,
    protected epsService: EpsService,
    private formBuilder: FormBuilder,
    private navegador: Router
  ) {
    this.builderForms();

  }

  private getEps() {
    this.epsService.getAll().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit(): void {
    this.getEps();
  }

  builderForms() {
    this.formulario = this.formBuilder.group({
      firstname: ['', Validators.required],
      secondName: [''],
      firstLasName: [''],
      secondLastName: [''],
      epesId: ['Seleccione', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userName: [''],
      abbreviation: ['Seleccione', Validators.required],
      number: ['']
    });
  }


  campoTieneError(campo: string): boolean {
    const control = this.formulario?.get(campo);
    return (control != undefined) ? control.invalid && (control?.touched || control.dirty) : false;
  }

  registerPatient() {
    if (this.formulario.valid) {
      const createUserPatient: CreateUserPatient = {
        password: this.formulario.value.password,
        patient: {
          firstName: this.formulario.value.firstname,
          secondName: this.formulario.value.secondName,
          lastName: this.formulario.value.firstLasName,
          secondLastName: this.formulario.value.secondLastName,
          documentType: "IdentificationCard",
          documentNumber: this.formulario.value.number,
          email: this.formulario.value.email,
          phone: this.formulario.value.number,
          address: this.formulario.value.address,
          birthdate: new Date(),
          epsId: this.formulario.value.epesId
        }
      };
      this.createPatientService.create(createUserPatient).subscribe((result) => {
        alert("Paciente creado existosamente");
        this.navegador.navigate(["auth/login"])
      }, () => {
        alert("No se pudo crear el paciente, contacte con el administrador");
      });
    }
  }
}
