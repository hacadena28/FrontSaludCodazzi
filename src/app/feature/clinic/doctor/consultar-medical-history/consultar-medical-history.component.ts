import {Component, OnInit} from '@angular/core';
import {MedicalHistoryDto} from "./models/medicalHistory-dto.interface";

import {MedicalHistoryPaginatedDto} from "./models/medicalHistory-paginated-dto.model";
import {MedicalHistoryService} from "./Services/medical-history.service";

@Component({
    selector: 'app-consultar-medical-history',
    templateUrl: './consultar-medical-history.component.html',
    styleUrls: ['./consultar-medical-history.component.scss']
})
export class ConsultarMedicalHistoryComponent implements OnInit {

    constructor(private medicalHistory: MedicalHistoryService) {
    }

    data: MedicalHistoryPaginatedDto[] = [];
    page = 1;
    total = 0;
    perPage = 10;
    totalRecords = 0;


    ngOnInit(): void {
        this.getData("8831498e-a968-44e9-d721-08dbf2635302")
    }

    getData(documentNumber: string) {
        this.medicalHistory.getById(documentNumber).subscribe(response => {
            this.data = response.records;
            this.total = response.totalRecords;
            console.log(response);
        });
    }
}
