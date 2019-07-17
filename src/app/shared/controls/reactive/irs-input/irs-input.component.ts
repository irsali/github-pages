import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material';

@Component({
  selector: 'irs-input',
  templateUrl: './irs-input.component.html',
  styleUrls: ['./irs-input.component.scss']
})
export class IrsInputComponent implements OnInit {

  @Input() form: AbstractControl;
  @Input() name: string;
  @Input() label: string;
  @Input() type: string;
  @Input() showInputValidationMessages: boolean;
  @Input() tooltiptext: string;
  @Input() icon: string;

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

  }

}

