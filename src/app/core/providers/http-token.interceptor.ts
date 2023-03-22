import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('MAPOLO_TOKEN');
    let request = req;
    if (token) {
      request = req.clone({ headers: req.headers?.set('Authorization', `Bearer ${token}`) });
    }
    return next.handle(request);
  }
}
