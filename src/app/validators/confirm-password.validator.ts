import { AbstractControl } from '@angular/forms'

export class ConfirmPasswordValidator {
  static MatchPassword(control: AbstractControl) {
    let password = control.get('password')?.value;
    let pconfirm = control.get('pconfirm')?.value;
    if (password != pconfirm) {
      control.get('pconfirm')?.setErrors({ ConfirmPassword: true });
    }
  }
}