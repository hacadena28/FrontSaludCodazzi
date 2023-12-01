import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EpsPaginatedDto } from './shared/models/eps-paginated-dto.model';
import { EpsService } from './shared/service/eps.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-eps-management',
  templateUrl: './eps-management.component.html',
  styleUrls: ['./eps-management.component.scss']
})
export class EpsManagementComponent implements OnInit, AfterViewInit {
    page: number = 0;
    recordsPerPage = 5;
    pageSizeOptions = [5, 10, 20];
    displayedColumns: any[] = [{field: 'id', name: "Id"}, {field: 'name', name: "Nombre"}, {field: 'state', name: "Estado"}];
    totalRecords = 0;
    dataSource = new MatTableDataSource<EpsPaginatedDto>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    constructor(public epsService: EpsService) {
    }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.getEpsPaginated();
    }

  handlePageEvent(e: PageEvent) {
    debugger;
    this.recordsPerPage = e.pageSize;
    this.page = e.pageIndex;
    this.getEpsPaginated();
  }

    getEpsPaginated() {
      this.epsService.getAllPaginated(this.page + 1, this.recordsPerPage).subscribe(result => {
        this.dataSource.data = result.records;
        this.totalRecords = result.totalRecords;
      });
    }
}
