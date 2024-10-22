import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {  Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/service/authorization-service/authorization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggingComponent implements OnInit {

  authForm!: FormGroup;
  private subscription$: Subscription | null = null;
  constructor(private readonly authorizationService: AuthorizationService, private readonly router: Router, private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
        'username': [null, Validators.required],
        'password': [null, [Validators.required, Validators.minLength(8)]]
    });
}

  onSubmit() {
    if (this.authForm.valid) {
      const login = this._username?.value;
      const password = this._password?.value;
      this.subscription$ = this.authorizationService.authorizate(login, password).subscribe({
        next: (response) => {       
          this.router.navigate(['/main']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err); 
        },
      });

    }
  }
  ngOnDesctroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  get _username() {
    return this.authForm.get('username');
  }

  get _password() {
    return this.authForm.get('password');
  }

}
