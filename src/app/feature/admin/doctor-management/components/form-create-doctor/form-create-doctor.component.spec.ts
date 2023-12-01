import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateDoctorComponent } from './form-create-doctor.component';

describe('FormCreateDoctorComponent', () => {
  let component: FormCreateDoctorComponent;
  let fixture: ComponentFixture<FormCreateDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateDoctorComponent]
    });
    fixture = TestBed.createComponent(FormCreateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
