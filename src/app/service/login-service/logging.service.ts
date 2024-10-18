import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoggingForm } from '../../interface/loggingform';
import { ILoggingToken } from '../../interface/loggintoken';
import { Observable, of, throwError } from 'rxjs';
import { URL } from 'src/app/ingecter/url';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private readonly http: HttpClient) {}
  authorizate(login: string, password: string): Observable<string> {
    const data: ILoggingForm = {
      login: login,
      password: password,
    };
    return this.http.post<ILoggingToken>(`/api/authorization/token`, data)
    .pipe(
      switchMap((response) => {
        sessionStorage.setItem('tokens', JSON.stringify(response));
        return of('success loggin');
      })
    );


  }


}
