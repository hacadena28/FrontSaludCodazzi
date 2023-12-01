import { Injectable, inject } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { AppointmentPaginatedDTO, Paginated } from '../models/paginated.interface';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppointmentService {

  http = inject(HttpService);

  getAllPaginated(page: number, recordsPerPage: number): Observable<Paginated<AppointmentPaginatedDTO>> {
    return this.http.doGet<Paginated<AppointmentPaginatedDTO>>(`${environment.appUrl}appointment?page=${page}&recordsPerPage=${recordsPerPage}`)
      .pipe(
        map((response: any) => this.mapToAppoinmentToPaginatedDto(response))
      );
  }

  private mapToAppoinmentToPaginatedDto(response: any): Paginated<AppointmentPaginatedDTO> {
    return {
      page: response.page,
      totalPages: response.totalPages,
      totalRecords: response.totalRecords,
      records: response.records.map((record: any) => new AppointmentPaginatedDTO(record.id, record.date, record.appointmentStartDate, record.appointmentFinalDate, record.state, record.type, record.description, record.patientId, record.doctorId))
    }
  }

}
