import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTabsModule, MatTableModule } from '@angular/material';

@NgModule({
    imports: [
      MatCardModule,
      MatButtonModule,
      MatTabsModule
    ],
    exports: [
      MatCardModule,
      MatButtonModule,
      MatTabsModule,
      MatTableModule
    ]
  })

export class OfficiatingMaterialModule { }