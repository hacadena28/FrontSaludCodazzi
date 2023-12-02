import { TestBed } from '@angular/core/testing';

import { ChangeInfoPatientService } from './change-info-patient.service';

describe('ChangeInfoPatientService', () => {
  let service: ChangeInfoPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeInfoPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
