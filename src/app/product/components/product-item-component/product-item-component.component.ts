import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product-model";

@Component({
  selector: 'app-product-item-component',
  templateUrl: './product-item-component.component.html',
  styleUrls: ['./product-item-component.component.scss']
})
export class ProductItemComponentComponent implements OnInit {
  @Input() public product!: ProductModel;
  @Output() public addItemToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  public onBuy(product: ProductModel): void {
    this.addItemToCart.emit(product);
  }
}
