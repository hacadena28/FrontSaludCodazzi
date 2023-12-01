import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    declarations: [
        CardComponent,
    ],
    exports: [
        CardComponent,
        ReactiveFormsModule

    ],
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
      MatTableModule,
      MatPaginatorModule

    ]
})
export class SharedModule { }
