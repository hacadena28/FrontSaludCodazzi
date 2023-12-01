import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EpsPaginatedDto } from './shared/models/eps-paginated-dto.model';
import { EpsService } from './shared/service/eps.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-eps-management',
  templateUrl: './eps-management.component.html',
  styleUrls: ['./eps-management.component.scss']
})
export class EpsManagementComponent implements OnInit {
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
}
