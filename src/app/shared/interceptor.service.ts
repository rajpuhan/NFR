import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    const baseUrl="http://localhost:3000";
    const authToken = localStorage.getItem('auth-token') || undefined;
    if (authToken) {
      const headers = new HttpHeaders().set("Authorization", ''+authToken)
                                      .set('Content-Type', 'application/json');
    
    const httpReq = request.clone({
      url: `${baseUrl}${request.url}`,
      headers: headers
    });
    return next.handle(httpReq);
    } else {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const httpReq = request.clone({
        url: `${baseUrl}${request.url}`,
        headers: headers
      });
    return next.handle(httpReq);
      
    }
  }
}
