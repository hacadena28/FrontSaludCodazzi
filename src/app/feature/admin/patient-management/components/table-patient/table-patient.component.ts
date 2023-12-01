import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs";
import {PatientService} from "../../shared/Services/patient.service";
import {UserService} from "../../../doctor-management/shared/Services/user.service";
import {UserModelDto} from "../../../doctor-management/shared/models/user-dto.model";
import {PatientPaginatedDto} from "../../shared/models/patient-paginated-dto.model";

@Component({
  selector: 'app-table-patient',
  templateUrl: './table-patient.component.html',
  styleUrls: ['./table-patient.component.scss']
})
export class TablePatientComponent implements OnInit {
  data: PatientPaginatedDto[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;

  constructor(public patientService: PatientService, public userService: UserService) {
  }

  ngOnInit() {
    this.getData(this.page);

  }

  getData(page: number = 1) {
    this.patientService.getAllPaginated(page, 5).subscribe(response => {
      this.data = response.records;
      this.total = response.totalRecords + 1;
    });
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }


  deletePatient(documentNumber: string) {
    this.delete(documentNumber);
  }

  delete(documentNumber: string) {
    this.userService.getByDocumentNumber(documentNumber).pipe(
      switchMap((userSearched: UserModelDto) => {
        return this.userService.delete(userSearched.id);
      })
    )
      .subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
        }
      );
  }


}


