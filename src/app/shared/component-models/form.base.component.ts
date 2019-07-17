import { BaseComponent } from './base.component';
import { Utility } from '../helpers';
import { FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class FormBaseComponent extends BaseComponent implements OnDestroy {

  subscriptions: Array<Subscription>;
  private _submitProcessing: boolean;
  private _disableSubmitButton: boolean;

  constructor() {
    super();
    this.subscriptions = [];
  }

  set submitProcessing(value: boolean) {
    // Also update disableSubmitButton value
    this._disableSubmitButton = this._submitProcessing = value;
  }
  get submitProcessing() {
    return this._submitProcessing;
  }

  get disableSubmitButton() {
    return this._disableSubmitButton;
  }

  // ****** methods to keep behaviour similar on all pages and updatable from single place

  submitProcessStart(form?: FormGroup) {
    if (this instanceof FormBaseComponent) {
      Utility.markFormGroupTouched(form);
      this.submitProcessing = true;
    } else {
      console.error('wrong call of submitProcessStart');
    }
  }

  submitProcessComplete() {
    if (this instanceof FormBaseComponent) {
      this.submitProcessing = false;
    } else {
      console.error('wrong call of submitProcessComplete');
    }
  }

  submitProcessError() {
    if (this instanceof FormBaseComponent) {
      this.submitProcessing = false;
    } else {
      console.error('wrong call of submitProcessError');
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach((value) => {
        value.unsubscribe();
      });
    }
  }

}
