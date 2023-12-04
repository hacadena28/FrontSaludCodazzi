import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.builderForms();
  }

  CancelarRegistro() {
    this.router.navigate(["auth/login"])
  }

  builderForms() {
    this.formulario = this.formBuilder.group({
      documentNumber: ['', Validators.required]
    });
  }
}


