import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl : string = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<User[]>(this.baseUrl)
  }

  getUser(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id)
  }

  authenticateUser(email: string, password: string) {
    console.log(email)
    console.log(password)
    return this.http.get<User>(this.baseUrl + '?email=' + email + '&password=' + password)
    // return this.http.get<User>(this.baseUrl + '?email=' + email + '&password=' + password) ? true : false
  }

  addUser(user: User) {
    return this.http.post<User>(this.baseUrl, user)
  }

  updateUser(user: User) {
    return this.http.put<User>(this.baseUrl + '/' + user.id, user)
  }

  deleteUser(id: number) {
    return this.http.delete<User>(this.baseUrl + '/' + id)
  }

}
