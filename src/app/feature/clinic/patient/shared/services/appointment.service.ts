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
    let userDataLocal = localStorage.getItem('user')
    let user = JSON.parse(userDataLocal || '');
    return this.http.doGet<Paginated<AppointmentDTO>>(`${environment.appUrl}appointment/user/${user.userId}/?page=${page}&recordsPerPage=${recordsPerPage}`)
      .pipe(
        map((response: any) => this.mapToAppaintmentPaginated(response))
      );
  }

  getByDoctorAndDate(date: any): Observable<AppointmentDTO[]> {
    let userDataLocal = localStorage.getItem('user')
    let user = JSON.parse(userDataLocal || '');
    return this.http.doGet<AppointmentDTO[]>(`${environment.appUrl}appointment/day/${user.userId}/${date}`)
      .pipe(
        map((response: any) => this.mapToAppaintment(response))
      );
  }

  private mapToAppaintmentPaginated(response: any): Paginated<AppointmentDTO> {
    return {
      page: response.page,
      totalPages: response.totalpages,
      totalRecords: response.totalRecords,
      records: response.records.map((record: any) => new AppointmentDTO(record.id,
        record.appointmentStartDate,record.appointmentFinalDate, record.state, record.type,
        record.description, record.patientId, record.doctorId, record.doctorFullName, record.patientFullName))
    }
  }

  private mapToAppaintment(response: any): AppointmentDTO[] {
    return response.map((record: any) => new AppointmentDTO(record.id,
      record.appointmentStartDate,record.appointmentFinalDate, record.state, record.type,
      record.description, record.patientId, record.doctorId, record.doctorFullName, record.patientFullName));
  }

  reagendarCita(reagendarCita: any): Observable<void> {
    return this.http.doPut<any, void>(`${environment.appUrl}appointment/${reagendarCita.id}`, reagendarCita);
  }

  agregarHistoriaClinica(body: any): Observable<void> {
    return this.http.doPost<any, void>(`${environment.appUrl}medicalhistory`, body);
  }

}
