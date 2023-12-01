import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpService} from "@core/services/http.service";
import {environment} from "@env/environment";
import {EpsDto} from "../models/eps-dto.interface";


@Injectable()
export class EpsService {

  constructor(protected http: HttpService) { }

  getAll(): Observable<EpsDto[]> {
    return this.http.doGet<EpsDto[]>(`${environment.appUrl}eps/all`)
      .pipe(
        map((response: any[]) => response.map(item => this.mapToEpsDto(item.id, item.name)))
      );
  }

  private mapToEpsDto(id: string, name: string): EpsDto {
    return {
      id: id,
      name: name,
    };
  }
}
