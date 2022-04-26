import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListPageComponent} from "./components/product-list-page/product-list-page.component";
import {ProductViewPageComponent} from "./components/product-view-page/product-view-page.component";
import {storeProductResolver} from "../shared/guards/product.resolver";
import {ProductComponent} from "./components/product/product.component";
import {FetchProductAction} from "./store/product.actions";

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: ':productID',
        component: ProductViewPageComponent,
        ...storeProductResolver('products', new FetchProductAction(0)),
      },
      { path: '', component: ProductListPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
