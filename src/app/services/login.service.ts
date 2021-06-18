import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // currentUser: User
  // nullUser: User = {
  //   id: null,
  //   name: null,
  //   email: null,
  //   password: null,
  //   phone: null,
  //   profession: null,
  //   photoUrl: null,
  //   interests: null
  // }

  constructor(private router: Router, private userService: UserService) { 
    // this.nullUser = {
    //   id: null,
    //   name: null,
    //   email: null,
    //   password: null,
    //   phone: null,
    //   profession: null,
    //   photoUrl: null,
    //   interests: null
    // }
    // this.currentUser = this.nullUser
  }

  login(user: User) {
    sessionStorage.setItem('currentUser', JSON.stringify(user))
    // this.setCurrentUser(user)
    this.router.navigate(['home/search'])
  }

  logout() {
    sessionStorage.removeItem('currentUser')
    // sessionStorage.setItem('currentUser', JSON.stringify(this.nullUser))
    // this.setCurrentUser(this.nullUser)
    this.router.navigate(['get-started/login'])
  }

  getCurrentUser() {
    let currentUser = sessionStorage.getItem('currentUser')

    if (currentUser) {
      return JSON.parse(currentUser)
    }
    else {
      this.logout()
    }

    // if (this.currentUser === this.nullUser) {
    //   this.logout()
    // }
    // return this.currentUser
  }

  // setCurrentUser(user: User) {
  //   this.currentUser = user
  // }

  getUsers(): Observable<any> {
    return this.userService.getUsers()
  }

  // loggedIn(): boolean {
  //   return this.currentUser === this.nullUser ? true : false
  // }

}
