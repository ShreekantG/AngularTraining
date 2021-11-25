import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, pinCodeValidator } from '../validators';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
})
export class ModelDrivenComponent implements OnInit {
  userForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      age: new FormControl(12, [Validators.required]),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, emailValidator],
      }),
      address: new FormGroup({
        city: new FormControl(),
        pincode: new FormControl(null, [Validators.required, pinCodeValidator]),
      }),
    },
    { updateOn: 'submit' }
  );

  constructor() {}

  get addressObj(): FormGroup {
    return this.userForm.get('address') as FormGroup;
  }

  ngOnInit(): void {}

  saveData() {
    if (this.userForm.valid) {
    }
  }
  loadData() {
    const data = {
      name: 'demo',
      age: 14,
    };
    this.userForm.setValue(data);
  }

  patchData() {
    const data = {
      name: 'mike',
    };
    this.userForm.patchValue(data); // partial data
  }
}
