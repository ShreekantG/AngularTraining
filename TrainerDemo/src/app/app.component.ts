import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate = new Date();
  // selectedCurrency: string = 'INR';

  // updateCurrency(code: string) {
  //   this.selectedCurrency = code;
  // }
}
