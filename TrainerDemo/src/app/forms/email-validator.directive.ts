import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { emailValidator } from './validators';

@Directive({
  selector: 'input[appEmailValidator]',
  providers: [
    // DI PATTERN (interface, implementation)
    { provide: NG_VALIDATORS, useValue: emailValidator, multi: true },
  ],
})
export class EmailValidatorDirective {}
