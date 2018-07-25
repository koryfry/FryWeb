import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatSortModule, MatProgressSpinnerModule,
    MatPaginatorModule
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
        MatPaginatorModule
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
        MatPaginatorModule
    ]
  })

export class OfficiatingMaterialModule { }