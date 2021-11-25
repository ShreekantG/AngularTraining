import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  // angular ref, components
  @ViewChild('userForm') userFormObj!: NgForm;
  // @ViewChildren() : array of object
  constructor() {}

  ngOnInit(): void {}

  saveData(form: NgForm) {
    console.log('form submitted', form);
    if (form.valid) {
      // form submission logic
      const data = { username: form.value.name, userage: form.value.age };
      console.log('form data', form.value, data);
    }
  }

  loadData() {
    const data = {
      name: 'demo',
      age: 14,
    };
    this.userFormObj.form.setValue(data);
  }

  patchData() {
    const data = {
      name: 'mike',
    };
    this.userFormObj.form.patchValue(data); // partial data
  }
}
