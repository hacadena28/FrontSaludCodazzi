import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EpsPaginatedDto, Paginated } from './shared/models/eps-paginated-dto.model';
import { EpsService } from './shared/service/eps.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-eps-management',
  templateUrl: './eps-management.component.html',
  styleUrls: ['./eps-management.component.scss']
})
export class EpsManagementComponent implements OnInit, AfterViewInit {
    epsPaginated: Paginated<EpsPaginatedDto>;
    page: number = 1;
    recordsPerPage = 10;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<EpsPaginatedDto>();
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    constructor(public epsService: EpsService) {
    }

    ngOnInit() {
      this.getEpsPaginated();
    }

    getEpsPaginated() {
      this.epsService.getAllPaginated(this.page, this.recordsPerPage).subscribe(result => {
        this.epsPaginated = result;
      });
    }
}
