import { Component, ViewEncapsulation, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'fw-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CustomDialogComponent implements OnInit {
  @Input() titleIcon: string = null;
	@Input() dialogType: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'default';
	@Input() notes: string[];
	@Input() hasPanel: boolean = false;
	@Input() fullWidth: boolean = false;

	@HostBinding('class.has-title-icon') private _hasTitleIcon: boolean = false;
	@HostBinding('class.has-notes') private _hasNotes: boolean = false;
	@HostBinding('class.paneled') private _hasPanel: boolean = false;
	@HostBinding('class.default') private _isDefault: boolean = false;
	@HostBinding('class.primary') private _isPrimary: boolean = false;
	@HostBinding('class.secondary') private _isSecondary: boolean = false;
	@HostBinding('class.success') private _isSuccess: boolean = false;
	@HostBinding('class.danger') private _isDanger: boolean = false;
	@HostBinding('class.warning') private _isWarning: boolean = false;
	@HostBinding('class.info') private _isInfo: boolean = false;
	@HostBinding('class.full-width') private _fullWidth: boolean = false;

	ngOnInit(): void {
		this._hasTitleIcon = this.titleIcon !== null && this.titleIcon.length > 0;
		this._hasNotes = this.notes && this.notes.length > 0;
		this._hasPanel = this.hasPanel;
		this._isDefault = this.dialogType === 'default';
		this._isPrimary = this.dialogType === 'primary';
		this._isSecondary = this.dialogType === 'secondary';
		this._isSuccess = this.dialogType === 'success';
		this._isDanger = this.dialogType === 'danger';
		this._isWarning = this.dialogType === 'warning';
		this._isInfo = this.dialogType === 'info';
		this._fullWidth = this.fullWidth;
	}

}
