import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion',
})
export class ConversionPipe implements PipeTransform {
  constructor(private currency: CurrencyPipe) {}
  // value | pipe : code : arg1 : arg2
  transform(value: number, code: string = 'INR'): number | string | null {
    if (isNaN(value)) return null;
    return this.formatCurrency(value, code);
  }
  formatCurrency(value: number, code: string) {
    const converted = this.convertValue(value, code);
    return this.currency.transform(converted, code);
  }
  convertValue(value: number, code: string) {
    switch (code) {
      case 'USD':
        return (value /= 70);
      case 'EUR':
        return (value /= 90);
      case 'GBP':
        return (value /= 80);
      case 'CAD':
        return (value /= 50);
      default:
        return value;
    }
  }
}
