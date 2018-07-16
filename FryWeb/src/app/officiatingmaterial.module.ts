import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule, 
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule
    ]
  })

export class OfficiatingMaterialModule { }