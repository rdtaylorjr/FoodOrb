import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public view = 'payment'
  public payments: Payment[] = []
  public selectedPayment!: Payment

  constructor(private router: Router, private paymentService: PaymentService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.paymentService.getUserPayments(this.loginService.getCurrentUser()).subscribe(response => this.payments = response)
  }

  add() {
    this.view = 'add'
  }

  edit(payment: Payment) {
    this.selectedPayment = payment
    this.view = 'edit'
  }

  delete(payment: Payment) {
    this.selectedPayment = payment
    this.view = 'delete'
  }

  submit() {
    this.view = 'payment'
  }

  cancel() {
    if (this.view === 'payment') {
      this.router.navigate(['settings'])
    }
    else {
      this.view = 'payment'
    }
  }

}
