import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product-model";
import {ProductRepository} from "../../services/product-repository";
import {CartService} from "../../../cart/services/cart-service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: ProductModel[] = [];

  constructor(
    private productRepository: ProductRepository,
    private cartService: CartService,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.products = await this.productRepository.getProducts();
  }

  public onAddItemToCart(item: ProductModel): void {
    this.cartService.addItemToCart(item);
  }
}
