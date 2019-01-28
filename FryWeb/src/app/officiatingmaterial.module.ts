import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatSortModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatChipsModule, MatDialogModule, MatAutocompleteModule
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
        MatDialogModule,
        MatAutocompleteModule
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
        MatDialogModule,
        MatAutocompleteModule
    ]
  })

export class OfficiatingMaterialModule { }