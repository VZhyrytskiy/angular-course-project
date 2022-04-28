import {RouterStateSerializer} from "@ngrx/router-store";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {RouterStateUrl} from "./app.reducer";

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route: ActivatedRouteSnapshot = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;

    const { params } = route;

    return { url, queryParams, params };
  }
}
