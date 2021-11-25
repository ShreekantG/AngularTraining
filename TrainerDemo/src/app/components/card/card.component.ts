import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'light'
    | 'dark'
    | 'white' = 'white';
  constructor() {}

  get isColorEnabled(): boolean {
    return this.color !== 'light' && this.color !== 'white';
  }

  get bgColor() {
    return `card bg-${this.color} rounded-0`;
  }

  ngOnInit(): void {}
}
