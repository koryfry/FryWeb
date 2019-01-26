import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatSortModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatChipsModule, MatDialogModule
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
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatChipsModule,
        MatDialogModule
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
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatChipsModule,
        MatDialogModule
    ]
  })

export class OfficiatingMaterialModule { }