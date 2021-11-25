import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencyCodes: string[] = ['INR', 'USD', 'CAD', 'EUR', 'GBP'];
  // @Output() selected = new EventEmitter();
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  changeCurrency(event: Event) {
    // console.log(event);
    const ele = event.target as HTMLSelectElement;
    // this.selected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value);
  }
}
