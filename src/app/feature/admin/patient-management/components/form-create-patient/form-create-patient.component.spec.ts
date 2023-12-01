import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePatientComponent } from './form-create-patient.component';

describe('FormCreatePatientComponent', () => {
  let component: FormCreatePatientComponent;
  let fixture: ComponentFixture<FormCreatePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreatePatientComponent]
    });
    fixture = TestBed.createComponent(FormCreatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
