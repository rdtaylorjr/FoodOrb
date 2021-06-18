import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter()
  model: FormGroup
  users: User[] = []
  view = 'login'
  

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { 
    this.model = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void { 
    this.loginService.getUsers().subscribe(response => this.users = response)
  }

  login() {
    let email = this.model.get('email')?.value
    let password = this.model.get('password')?.value
    let found: boolean = false

    this.users.forEach(user => {
      if (user.email === email && user.password === password) {
        found = true
        this.loginService.login(user)
      }
    })

    // Implement logic for a route gate??

    if (!found) {
      this.view = 'loginFailed'
    }
  }

  tryAgain() {
    this.view = 'login'
  }

}
