import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-linkedin-form',
  templateUrl: './linkedin-form.component.html',
  styleUrls: ['./linkedin-form.component.css'],
})
export class LinkedinFormComponent implements OnInit {
  linkedinForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      experience: new FormArray([this.createExperienceControls()]),
    },
    { updateOn: 'blur' }
  );
  constructor() {}

  get experienceArray(): FormArray {
    return this.linkedinForm.get('experience') as FormArray;
  }

  ngOnInit(): void {}

  createExperienceControls(): FormGroup {
    return new FormGroup({
      noOfYrs: new FormControl(0),
      company: new FormControl(),
      designation: new FormControl(),
    });
  }
  addExperience() {
    this.experienceArray.push(this.createExperienceControls());
  }
  removeExperience(index: number) {
    this.experienceArray.removeAt(index);
  }
}
