import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule, 
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ]
  })

export class OfficiatingMaterialModule { }