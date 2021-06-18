import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let password = control.get('password')?.value;
      let pconfirm = control.get('pconfirm')?.value;
      return password != pconfirm ? { ConfirmPassword: true } : null
    };
  }