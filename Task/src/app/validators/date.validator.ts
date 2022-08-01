import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function createDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const dateFromControl = new Date(control.value);

    if (!dateFromControl) {
      return null;
    }

    let eighteenYearsAgoFromNow = new Date();
    eighteenYearsAgoFromNow.setFullYear(eighteenYearsAgoFromNow.getFullYear() - 18);

    return dateFromControl.getTime() > eighteenYearsAgoFromNow.getTime() ? {'dateValidity': true} : null;
  }
}
