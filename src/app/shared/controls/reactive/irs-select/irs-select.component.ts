import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material';

@Component({
  selector: 'irs-select',
  templateUrl: './irs-select.component.html',
  styleUrls: ['./irs-select.component.scss']
})
export class IrsSelectComponent implements OnInit {

  @Input() form: AbstractControl;
  @Input() name: string;
  @Input() label: string;
  @Input() showInputValidationMessages: boolean;
  @Input() tooltiptext: string;
  @Input() icon: string;
  @Input() isDisabled: boolean;
  @Input() floatLabel: FloatLabelType;
  @Input() options: any;
  control: AbstractControl;
  isRequired: boolean;

  constructor() { }

  ngOnInit() {

    this.control = this.form.get(this.name);
    if (this.control && this.control.validator) {
      const validator = this.control.validator(new FormControl());
      this.isRequired = (validator && validator.required) ? true : false;
    }

    // Default float type Auto
    if (this.floatLabel) {
      this.floatLabel = 'auto';
    }

  }

}
