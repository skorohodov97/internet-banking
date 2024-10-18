import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  authForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
        'username': [null, Validators.required],
        'password': [null, [Validators.required, Validators.minLength(6)]]
    });
}

  onSubmit() {
    console.log(this.authForm.value);
  }
  
}
