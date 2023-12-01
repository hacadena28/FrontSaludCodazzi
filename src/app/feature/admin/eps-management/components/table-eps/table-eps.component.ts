import { Component } from '@angular/core';
import {EpsPaginatedDto} from "../../shared/models/eps-paginated-dto.model";
import {EpsService} from "../../shared/service/eps.service";
import {ChangeInfoEpsService} from "../../shared/service/chage-info-eps.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormCreateEpsComponent} from "../form-create-eps/form-create-eps.component";
import {FormUpdateEpsComponent} from "../form-update-eps/form-update-eps.component";
import {EpsDto} from "../../shared/models/eps-dto.interface";
import {ConfirmActionComponent} from "../../../../../shared/components/confirm-action/confirm-action.component";

@Component({
  selector: 'app-table-eps',
  templateUrl: './table-eps.component.html',
  styleUrls: ['./table-eps.component.scss']
})
export class TableEpsComponent {
  modalRefUpdate: MdbModalRef<FormUpdateEpsComponent> | null = null;
  data : EpsPaginatedDto[] = [];
  page = 1;
  total = 0;
  perPage = 10;
  totalRecords = 0;

  constructor(public epsService: EpsService, private changeInfoEpsService: ChangeInfoEpsService, private modalService: MdbModalService) {
    this.changeInfoEpsService.evento.subscribe((data) => {
      this.getData();
    });
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
  openModalUpdate(eps: EpsDto) {
    this.modalRefUpdate = this.modalService.open(FormUpdateEpsComponent, {
      modalClass: 'modal-lg',
      data: eps,
    });
    if (this.modalRefUpdate) {
      this.modalRefUpdate.component.data = eps;
    }
  }

  pageChanged(page: number) {
    this.page = page;
    this.getData(this.page);
  }

  abrirModalConfirmacion(id: string) {
    const modalRef: MdbModalRef<ConfirmActionComponent> = this.modalService.open(ConfirmActionComponent);
    modalRef.onClose.subscribe((result) => {
      if (result) {
        this.epsService.delete(id).subscribe((result) => {
          this.getData();
        }, () => {
          console.log('Fallo en eliminar, contacte con el administrador');
        });
      } else {
        console.log('Eliminación cancelada');
      }
    });
  }
}
