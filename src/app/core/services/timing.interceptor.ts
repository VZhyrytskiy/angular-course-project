import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/api/')) {
      return next.handle(req);
    }

    const clone = req.clone({
      headers: req.headers.set('time-now', new Date().getTime().toString()),
    })

    return next.handle(clone).pipe(
      tap((res) => {
        const now = new Date().getTime();
        const diff = now - (+clone.headers.get('time-now')!);

        console.log(`url: ${req.url} time: ${diff}`)
      })
    );
  }
}
