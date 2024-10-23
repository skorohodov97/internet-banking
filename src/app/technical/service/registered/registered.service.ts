import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IRegisteredForm } from '../../interface/registeredform';
@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  constructor(private http: HttpClient) {}
  registerUser(register: IRegisteredForm): Observable<string> {
    const data = this.conversion(register);
    return this.http.put<IRegisteredForm>('/api/clients', data)
    .pipe(switchMap(response => of('success registered')));
  }
  conversion(data: IRegisteredForm): IRegisteredForm {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName,
      birthdate: new Date(data.birthdate).toISOString(),
      login: data.login,
      password: data.password,
      phoneNumber: data.phoneNumber,
      address: data.address,
      email: data.email,
      sex: data.sex
    };
  }
}
