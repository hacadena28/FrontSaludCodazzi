import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from '@angular/forms';

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
        ReactiveFormsModule

    ]
})
export class SharedModule { }
