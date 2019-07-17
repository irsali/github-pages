import { Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class IrsValidators extends Validators {

  /**
  * Validator that performs email validation.
  */
  static customEmail(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    return Validators.email(control);
  }

  static matchOtherValidator(otherControlName: string) {
    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate(control: FormControl) {
      if (!control.parent) {
        return null;
      }

      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        otherControl = control.parent.get(otherControlName) as FormControl;
        if (!otherControl) {
          throw new Error('matchOtherValidator(): other control is not found in parent group');
        }
        otherControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }

      if (!otherControl) {
        return null;
      }

      if (otherControl.value !== thisControl.value) {
        return {
          matchOther: true
        };
      }

      return null;

    };

  }

}
