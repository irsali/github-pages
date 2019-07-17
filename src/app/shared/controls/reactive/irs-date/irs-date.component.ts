import { Component, OnInit, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material';

@Component({
  selector: 'irs-date',
  templateUrl: './irs-date.component.html',
  styleUrls: ['./irs-date.component.scss']
})
export class IrsDateComponent implements OnInit {

  @Input() form: AbstractControl;
  @Input() name: string;
  @Input() label: string;
  @Input() type: string;
  @Input() showInputValidationMessages: boolean;
  @Input() tooltiptext: string;
  @Input() icon: string;
  @Input() isDisabled: boolean;
  @Input() floatLabel: FloatLabelType;
  control: AbstractControl;
  isRequired: boolean;

  constructor() { }

  ngOnInit() {
    // Default type is text
    if (!this.type) {
      this.type = 'text';
    }

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

