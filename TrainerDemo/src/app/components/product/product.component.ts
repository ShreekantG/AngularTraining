import { CurrencyPipe } from '@angular/common';
import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CurrencyPipe],
})
export class ProductComponent implements OnChanges {
  @Input('data') productData!: ProductType;
  @Input() wishlist: boolean = false;
  @Input() code!: string;
  @Output() btnClick = new EventEmitter();

  defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';
  get btnText(): string {
    if (this.wishlist) return 'Wishlist';
    return 'Cart';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  notifyParent() {
    // notify on click
    // triggering a custom event
    this.btnClick.emit({
      id: this.productData.productId,
      test: 'data',
    });
  }
}
