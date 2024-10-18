import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {  Subscription } from 'rxjs';
import { LoggingService } from 'src/app/service/login-service/logging.service';
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
  constructor(private readonly loggingService: LoggingService, private readonly router: Router, private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
        'username': [null, Validators.required],
        'password': [null, [Validators.required, Validators.minLength(6)]]
    });
}

  onSubmit() {
    if (this.authForm.valid) {
      const login = this._username?.value;
      const password = this._password?.value;
      this.subscription$ = this.loggingService.authorizate(login, password).subscribe({
        next: (response) => {       
          this.router.navigate(['/main-page']);
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
