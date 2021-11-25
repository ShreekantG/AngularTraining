import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // @Input()
  currentCurrency!: string;
  pList: ProductType[] = [
    {
      productId: 1000,
      productName: 'product',
      productPrice: 12999.567,
      productStock: true,
      productImage:
        'https://1rukminim1.flixcart.com/image/612/734/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50', // copy/paste image in assets folder
    },
    {
      productId: 1001,
      productName: 'product 1',
      productPrice: 14999,
      productStock: false,
      productImage:
        'https://rukminim1.flixcart.com/image/612/734/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50', // copy/paste image in assets folder
    },
    {
      productId: 1002,
      productName: 'product 2',
      productPrice: 14999,
      productStock: false,
      productImage:
        'https://rukminim1.flixcart.com/image/612/734/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50', // copy/paste image in assets folder
    },
  ];
  currency$!: Subscription;
  constructor(
    private productService: ProductService,
    public currencyService: CurrencyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getCode();
  }
  ngOnDestroy() {
    this.currency$.unsubscribe();
  }

  getCode() {
    this.currency$ = this.currencyService.currencyObservable.subscribe(
      (data) => {
        console.log('CODE', data);
        this.currentCurrency = data;
      }
    );
  }

  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('success', data);
        this.pList = data;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  addToCart(obj: any) {
    console.log('add to cart clicked', obj);
    // redirect to the cart page
    // /forms/model
    this.router.navigate(['/forms', 'model']);
  }
}
