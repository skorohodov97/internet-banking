import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ILoggingToken} from '../interface/loggintoken';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private readonly router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const storageData = localStorage.getItem('tokens');
    const tokens: ILoggingToken = storageData ? JSON.parse(storageData) : null;
    if (tokens) {
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
          
    });
    }
    return next.handle(request).pipe(
        catchError(err => {
          if (err.status === 400) {
            this.router.navigate(['/login']);
          }
          return throwError(err);
        })
      );
    }
}