import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  model: FormGroup
  submitted = false
  view = 'emailInput'

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.model = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void { }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    // Implement logic to send password reset email here
    
    this.view = 'emailSent'
  }

}
