import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'fw-snackbar',
	encapsulation: ViewEncapsulation.None,
  templateUrl: './fw-snackbar.component.html',
  styleUrls: ['./fw-snackbar.component.scss']
})
export class FwSnackbarComponent {
  data: { message: string; action: string };

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) data: any,
    public snackBarRef: MatSnackBarRef<FwSnackbarComponent>
  )
  { 
    this.data = data;
  }

  /** Performs the action on the snack bar. */
	action(): void {
		this.snackBarRef.dismissWithAction();
	}

	/** If the action button should be shown. */
	get hasAction(): boolean {
		return !!this.data.action;
	}

}
