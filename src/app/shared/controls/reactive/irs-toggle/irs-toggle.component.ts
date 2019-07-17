import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IDropdownOption } from '@app/shared';

@Component({
  selector: 'irs-toggle',
  templateUrl: './irs-toggle.component.html',
  styleUrls: ['./irs-toggle.component.scss']
})
export class IrsToggleComponent implements OnInit {

  @Input() form: AbstractControl;
  @Input() name: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() showInputValidationMessages: boolean;
  @Input() tooltiptext: string;

  @Input() options: Array<IDropdownOption> | Array<any>;
  @Input() optionValueField = 'Value';
  @Input() optionTextField = 'Text';

  control: AbstractControl;
  isRequired: boolean;

  constructor() { }

  ngOnInit() {
  }

}
