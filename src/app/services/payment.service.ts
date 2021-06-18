import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../interfaces/payment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl: string = ' http://localhost:3000/payment'

  constructor(private http: HttpClient) { }

  getPayments(): Observable<any> {
    return this.http.get<Payment[]>(this.baseUrl)
  }

  getUserPayments(user: User) {
    return this.http.get<Payment[]>(this.baseUrl + '?userId=' + user.id)
  }

  getPayment(id: number) {
    return this.http.get<Payment>(this.baseUrl + '/' + id)
  }

  addPayment(payment: Payment) {
    return this.http.post<Payment>(this.baseUrl, payment)
  }

  updatePayment(payment: Payment) {
    return this.http.put<Payment>(this.baseUrl + '/' + payment.id, payment)
  }

  deletePayment(id: number) {
    return this.http.delete<Payment>(this.baseUrl + '/' + id)
  }

}
