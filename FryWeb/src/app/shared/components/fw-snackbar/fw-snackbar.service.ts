import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FwSnackbarComponent } from './fw-snackbar.component';

@Injectable()
export class FwSnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  success(message, action, config?: MatSnackBarConfig<any>) {
		config.panelClass = 'success';
		return this.open(message, action, 'success', config);
	}

	error(message, action, config?: MatSnackBarConfig<any>) {
		config.panelClass = 'error';
		return this.open(message, action, 'error', config);
  }
  
  warning(message, action, config?: MatSnackBarConfig<any>) {
		config.panelClass = 'warning';
		return this.open(message, action, 'warning', config);
	}

	open(message, action, type, config?: MatSnackBarConfig<any>) {
		config = { ...config, panelClass: type, data: { message: message, action: action } };
		return this.snackBar.openFromComponent(FwSnackbarComponent, config);
	}

}
