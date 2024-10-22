import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoggingForm } from '../../interface/loggingform';
import { ILoggingToken } from '../../interface/loggintoken';
import { BehaviorSubject,Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private readonly http: HttpClient) {}
  authorizate(login: string, password: string): Observable<string> {
    const data: ILoggingForm = {
      login: login,
      password: password,
    };
    return this.http.post<ILoggingToken>(`/api/authorization/token`, data)
    .pipe(
      switchMap((response) => {
        localStorage.setItem('tokens', JSON.stringify(response));
        this.isAuthenticatedSubject.next(true);
        return of('success loggin');
      })
    );
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('tokens');
  }

  logout(): Observable<string> {
    return this.http.delete<string>('/api/authorization/logout').pipe(
      switchMap((response) => {
        localStorage.removeItem('tokens');
        this.isAuthenticatedSubject.next(false);
        return of('success logout');
      })
  );
        
  }
}
