import {Component, OnInit} from '@angular/core';
import {DoctorPaginatedDto} from "./models/doctor-paginated-dto.model";
import {DoctorService} from "./shared/doctor.service";
import {UserService} from "./shared/user.service";
import {UserModelDto} from "./models/user-dto.model";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.scss']
})
export class DoctorManagementComponent implements OnInit {
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
        console.log(userSearched.id)
        console.log(userSearched.personId)
        return this.userService.delete(userSearched.id);
      })
    )
      .subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
          // Coloca aquí cualquier otra lógica que deba ejecutarse después de eliminar el usuario.
        },
        (error: any) => {
          console.error('Error al eliminar el usuario', error);
          // Manejar el error si la eliminación no tiene éxito.
        }
      );
  }


}
