import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule, 
        MatInputModule,
        MatCheckboxModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule
    ]
  })

export class OfficiatingMaterialModule { }