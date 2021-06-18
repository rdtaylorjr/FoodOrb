import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/app/directives/confirm-password.directive';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: FormGroup
  users: User[] = []
  submitted = false
  view = 'register'

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { 
    this.model = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      pconfirm: ['', Validators.required, confirmPasswordValidator],
      phone: ['', Validators.pattern('^[0-9]{10}$')],
      profession: [''],
      photoUrl: [''],
      interests: [['']]
    })
  }

  ngOnInit(): void {
    let view = this.activatedRoute.snapshot.paramMap.get('view')
    this.view = view ? view : this.view;

    this.userService.getUsers().subscribe(response => this.users = response)
  }

  generateId() {
    var max = 0
    this.users.forEach(user => {
      if (user.id !== null && user.id > max) {
        max = user.id
      }
    })
    return max + 1
  }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    let user = {
      id: this.generateId(),
      name: this.model.get('name')?.value,
      email: this.model.get('email')?.value,
      password: this.model.get('password')?.value,
      phone: this.model.get('phone')?.value,
      profession: this.model.get('profession')?.value,
      photoUrl: this.model.get('photoUrl')?.value,
      interests: this.model.get('interests')?.value
    }

    this.userService.addUser(user).subscribe(response => {
      console.log(response)
      this.router.navigate(['get-started/register', 'success'])
    })
  }

}
