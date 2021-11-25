import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';
import { ERROR_MESSAGES } from './error-messages';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css'],
})
export class ShowErrorsComponent implements OnInit {
  errorMessages: any = ERROR_MESSAGES;
  @Input() control!: AbstractControl | NgModel | null;
  constructor() {}

  ngOnInit(): void {}

  shouldShowErrors(): boolean {
    return !!this.control && !!this.control.errors && !!this.control.touched;
  }
  listOfErrors(): string[] {
    // this.control.errors : {required:true, minlength:{requiredLength:5}}
    // Object.keys(this.control.errors) : [required, minlength]
    const errors = this.control?.errors || [];
    return Object.keys(errors).map((err) =>
      this.errorMessages[err](this.control?.getError(err))
    );
    // ['This field is required','Min 5 chars is required']
  }
  getErrorMessage(err: any) {
    const errorMsg = this.errorMessages[err](this.control?.getError(err));
    if (!errorMsg) {
      return `This field is invalid`;
    }
    return errorMsg;
  }
}
