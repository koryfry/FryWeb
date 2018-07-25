import { NgModule } from '@angular/core';
import { 
    MatCardModule, MatButtonModule, MatTabsModule, MatTableModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatSortModule, MatProgressSpinnerModule
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
        MatProgressSpinnerModule
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
        MatProgressSpinnerModule
    ]
  })

export class OfficiatingMaterialModule { }