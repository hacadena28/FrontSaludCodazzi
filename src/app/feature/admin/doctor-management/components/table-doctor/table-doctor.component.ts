import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs";
import {DoctorPaginatedDto} from "../../shared/models/doctor-paginated-dto.model";
import {DoctorService} from "../../shared/Services/doctor.service";
import {UserService} from "../../shared/Services/user.service";
import {UserModelDto} from "../../shared/models/user-dto.model";

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.scss']
})
export class TableDoctorComponent implements OnInit {
  data: DoctorPaginatedDto[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;

  constructor(public doctorService: DoctorService, public userService: UserService) {
  }

  ngOnInit() {
    this.getData(this.page);

  }

  getData(page: number = 1) {
    this.doctorService.getAllPaginated(page, 5).subscribe(response => {
      this.data = response.records;
      this.total = response.totalRecords + 1;
    });
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }


  deleteDoctor(documentNumber: string) {
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
        },
      );
  }


}

