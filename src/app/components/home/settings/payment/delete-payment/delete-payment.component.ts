import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent implements OnInit {

  @Input() selectedPayment!: Payment
  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void { }

  delete() {
    let id = this.selectedPayment.id

    this.paymentService.deletePayment(id).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
  }

  cancel() {
    this.cancelEvent.emit()
  }

  displayPayment() {
    let payment = this.selectedPayment
    return payment.paymentType + ' •••• •••• •••• ' + payment.cardNumber.substr(-4) + ' exp ' + payment.expirationDate
  }

}
