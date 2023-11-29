import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  ListEPS = {
    isSuccess: "boolean",
    data: [
      {
        id: 12,
        name: "string",
        regime: "string"
      },
      {
        id: 12,
        name: "string",
        regime: "string"
      }

    ],
    message: "string",
    errors: null
  };
  formulario!: FormGroup;
  abbreviationOptions: string[] = ['CC', 'TI', 'CE'];

  constructor( private formBuilder: FormBuilder, private navegador: Router) {
    this.builderForms();

  }

  private getEps() {
   
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
    
  }
}
