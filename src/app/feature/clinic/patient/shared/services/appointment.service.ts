import { Injectable, inject } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';
import { AppointmentDTO } from '../interfaces/appointment';
import { Paginated } from '../interfaces/paginated';

@Injectable()
export class AppointmentService {
  http = inject(HttpService);


  getAllPaginated(page: number, recordsPerPage: number): Observable<Paginated<AppointmentDTO>> {
    return this.http.doGet<Paginated<AppointmentDTO>>(`${environment.appUrl}appointment?page=${page}&recordsPerPage=${recordsPerPage}`)
      .pipe(
        map((response: any) => this.mapToAppaintment(response))
      );
  }

  private mapToAppaintment(response: any): Paginated<AppointmentDTO> {
    return {
      page: response.page,
      totalPages: response.totalpages,
      totalRecords: response.totalRecords,
      records: response.records.map((record: any) => new AppointmentDTO(record.id,
        record.appointmentStartDate, record.state, record.type,
        record.description, record.patientId, record.doctorId))
    }
  }

  delete(id: string): Observable<void> {
    return this.http.doDelete<any>(`${environment.appUrl}appointment/${id}`);
  }

}
