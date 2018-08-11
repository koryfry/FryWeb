import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatSortModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatChipsModule
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
        MatChipsModule
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
        MatChipsModule
    ]
  })

export class OfficiatingMaterialModule { }