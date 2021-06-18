import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()
  model: FormGroup
  payments: Payment[] = []
  submitted = false

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private loginService: LoginService) { 
    this.model = this.formBuilder.group({
      id: [''],
      userId: [''],
      paymentType: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    })
  }

  ngOnInit(): void { 
    this.paymentService.getPayments().subscribe(response => this.payments = response)
  }

  generateId(): number {
    var max = 0
    this.payments.forEach(payment => {
      if (payment.id > max) {
        max = payment.id
      }
    })
    return max + 1
  }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    let payment = {
      id: this.generateId(),
      userId: this.loginService.getCurrentUser().id,
      paymentType: this.model.get('paymentType')?.value,
      cardNumber: this.model.get('cardNumber')?.value,
      expirationDate: this.model.get('expirationDate')?.value,
      cvv: this.model.get('cvv')?.value
    }

    this.paymentService.addPayment(payment).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
    
  }

  cancel() {
    this.cancelEvent.emit()
  }

}
