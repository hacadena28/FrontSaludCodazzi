import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.scss']
})
export class ConsultarCitaComponent {
  http = inject(HttpClient);

  data: any[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;
  lista2: any[] = [];

  // Modifica este método para realizar la consulta de citas
  getData(page: number = 1) {
    const url = `${environment.appUrl}appointment`;

    // Puedes añadir parámetros a la URL, por ejemplo, para la paginación
    const params = {
      page: page.toString(),
      perPage: this.perPage.toString()
    };

    this.http.get(url, { params })
      .subscribe((response: any) => {
        this.data = response.data; // Ajusta esto según la estructura de tu respuesta
        this.total = response.total; // Ajusta esto según la estructura de tu respuesta
        this.totalRecords = response.totalRecords; // Ajusta esto según la estructura de tu respuesta
      });
  }

  // Este método podría ser útil si necesitas cambiar la página desde algún otro lugar
  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }
}
