import { FormGroup } from "@angular/forms";

export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g;

export function compareEmail (a: string, b: string) {
  return (formGroup: FormGroup) => {
    const emailFormControl = formGroup.controls[a];
    const emailRepeatFormControl = formGroup.controls[b];

    if (emailFormControl.errors && !emailRepeatFormControl.errors?.['mustMatch']) {
      emailRepeatFormControl.setErrors({ mustMatch: true });
    } else {
      emailRepeatFormControl.setErrors(null);
    }
  }
}
