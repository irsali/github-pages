import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor {

  token = environment.token;

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const savedtoken = this.token;
    if (savedtoken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${savedtoken}`
        }
      });
    }

    return next.handle(request);
    // .pipe(
    //   tap(event => {
    //     // console.log(event);
    //     if (event instanceof HttpResponse) {
    //       const token = event.headers.get('authorization');
    //       const refreshToken = event.headers.get('rf');
    //       if (token && refreshToken) {
    //         this.storeService.setToken(token);
    //         this.storeService.setRefreshToken(refreshToken);
    //       }
    //     }
    //   })
    // );
  }
}


