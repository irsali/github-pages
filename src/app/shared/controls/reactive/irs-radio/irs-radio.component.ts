import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IDropdownOption } from '@app/shared';

@Component({
  selector: 'irs-radio',
  templateUrl: './irs-radio.component.html',
  styleUrls: ['./irs-radio.component.scss']
})
export class IrsRadioComponent implements OnInit {

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
    this.control = this.form.get(this.name);
  }

}
