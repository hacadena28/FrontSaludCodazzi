import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AppointmentPaginatedDTO } from '../shared/models/paginated.interface';
import { AppointmentService } from '../shared/services/appointment.service';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.scss']
})
export class ConsultarCitaComponent {

  data: AppointmentPaginatedDTO[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;

  http = inject(HttpClient);
  CS = inject(AppointmentService);

  getData(page: number = 1) {
    this.CS.getAllPaginated(page, 5).subscribe(response => {
      this.data = response.records;
      this.total = response.totalRecords + 1;
      console.log(this.data);

    });
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }

  lista2: any[] = [];
}
