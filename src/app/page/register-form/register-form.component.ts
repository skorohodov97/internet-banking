import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegisteredService} from '../../technical/service/registered/registered.service';
import {IRegisteredForm} from '../../technical/interface/registeredform';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class RegisterFormComponent implements OnInit {
  registrationForm!: FormGroup;
  private subscription$: Subscription | null = null;
  constructor( private fb: FormBuilder,
    private readonly registeredService: RegisteredService,
    private router: Router,
) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      birthdate: ['', Validators.required],
      login: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z]).{8,}$/),
          Validators.minLength(8),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^\+7\d{10}$/)],
      ],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sex: ['', Validators.required],
    });

  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const data: IRegisteredForm = this.registrationForm.value;
      this.subscription$ = this.registeredService.registerUser(data).subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err); 
        },
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  get _firstName() {
    return this.registrationForm.get('firstName');
  }
  get _lastName() {
    return this.registrationForm.get('lastName');
  }
  get _middleName() {
    return this.registrationForm.get('middleName');
  }
  get _birthdate() {
    return this.registrationForm.get('birthdate');
  }
  get _login() {
    return this.registrationForm.get('login');
  }
  get _password() {
    return this.registrationForm.get('password');
  }
  get _phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }
  get _address() {
    return this.registrationForm.get('address');
  }
  get _email() {
    return this.registrationForm.get('email');
  }
  get _sex() {
    return this.registrationForm.get('sex');
  }

}
