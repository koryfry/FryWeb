import { Injectable } from '@angular/core';

@Injectable()
export class TableDisplayService {
  displayedColumns: string[] = [];

  constructor() { }

  generateDisplayedColumns(res: any) {   
    var result = res;
    this.displayedColumns = [];
    if (result.length > 0) {
      for (var i=0; i < 1; i++) {
        var columnsFound = result[i];
        for (var key in columnsFound) {
          if ( (!key.toString().toLowerCase().startsWith('avatar')) && (!key.toString().toLowerCase().includes('id')) ) {
            console.log('Column name: ', key);
            this.displayedColumns.push(key);
          }            
        }
      }
    }
    return this.displayedColumns;
  }
}
