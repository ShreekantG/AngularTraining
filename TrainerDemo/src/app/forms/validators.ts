import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = re.test(control.value);
  if (valid) {
    return null;
  }
  return {
    email: true,
  };
}

export function pinCodeValidator(ctrl: FormControl) {
  if (ctrl.value == 123456) {
    return null; // valid
  }
  // invalid
  return {
    // error object
    pinCode: {
      validCode: 123456,
      enteredCode: ctrl.value,
    },
  };
}
