import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees = [
    { id: 1000, name: 'A' },
    { id: 1001, name: 'B' },
    { id: 1002, name: 'C' },
  ];
  constructor() {}

  trackById = (index: number, emp: any) => emp.id;

  ngOnInit(): void {}

  addEmployee() {
    this.employees = [
      { id: 1000, name: 'A' },
      { id: 1001, name: 'B' },
      { id: 1002, name: 'C' },
      { id: 1003, name: 'D' },
    ];
  }
}
