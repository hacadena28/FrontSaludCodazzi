import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '@env/environment';
import { AppointmentDTO } from '../shared/interfaces/appointment';
import { AppointmentService } from '../shared/services/appointment.service';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.scss']
})
export class ConsultarCitaComponent {
  aS = inject(AppointmentService);

  data: AppointmentDTO[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;
  stateMap: any = {
    'Scheduled': 'Programada',
    'Rescheduled': 'Reprogramada',
    'Canceled': 'Cancelada',
    'Attended': 'Atendida'
  };

  ngOnInit(): void {
    this.getData(this.page);
  }

  getData(page: number = 1) {
    this.aS.getAllPaginated(page, 5).subscribe(response => {
      this.data = response.records;
      this.total = response.totalRecords + 1;
      console.log(response);
    });
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }

  getStateName(value: string): string {
    return this.stateMap[value] || value;
  }

  editarCita(id: string) {

  }

  eliminarCita(id: string) {

  }
}
