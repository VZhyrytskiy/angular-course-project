import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductRepository} from "../../services/product.repository";
import {CartService} from "../../../cart/services/cart.service";
import {SnackbarService} from "../../../core/services/snackbar.service";
import {ProductComponent} from "../product/product.component";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent extends ProductComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];

  private subscription!: Subscription

  constructor(
    productRepository: ProductRepository,
    cartService: CartService,
    snackbarService: SnackbarService,
  ) {
    super(productRepository, cartService, snackbarService);
  }

  ngOnInit(): void {
    this.subscription = this.productRepository.getProducts()
      .subscribe(
        x => this.products = x
      );
  }

  onBuy(item: ProductModel): void {
    this.addProductToCart(item);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
