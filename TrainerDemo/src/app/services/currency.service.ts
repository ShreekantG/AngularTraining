import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// do not re-register this service anywhere in your application
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _code = 'INR';
  // private currencySubject = new Subject<string>(); // will give data only on next change
  private currencySubject = new BehaviorSubject<string>(this._code); // will give initial data + next change
  currencyObservable: Observable<string>; // needs currency code, should subscribe to this
  constructor() {
    this.currencyObservable = this.currencySubject.asObservable();
  }
  updateCurrency(code: string) {
    this._code = code;
    // publish a notification to the subscribers
    this.currencySubject.next(this._code);
  }
}
