import { Component } from '@angular/core';
import {EpsPaginatedDto} from "../../shared/models/eps-paginated-dto.model";
import {EpsService} from "../../shared/service/eps.service";

@Component({
  selector: 'app-table-eps',
  templateUrl: './table-eps.component.html',
  styleUrls: ['./table-eps.component.scss']
})
export class TableEpsComponent {
  data : EpsPaginatedDto[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;

  constructor(public epsService: EpsService) {
  }

  ngOnInit() {
    this.getData(this.page);
  }

  getData(page: number = 1) {
    this.epsService.getAllPaginated(page, 5).subscribe(response => {
      this.data = response.records;
      this.total = response.totalRecords + 1;
    });
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }

  editarEps(id: string) {

  }

  eliminarEps(id: string) {

  }
}
