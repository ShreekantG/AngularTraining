import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { pinCodeValidator } from './validators';

@Directive({
  selector: 'input[appPincode]',
  providers: [
    { provide: NG_VALIDATORS, useValue: pinCodeValidator, multi: true },
  ],
})
export class PincodeDirective {}
