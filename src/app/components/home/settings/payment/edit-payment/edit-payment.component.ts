import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {

  @Input() selectedPayment!: Payment
  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()
  model: FormGroup
  submitted = false

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService) { 
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
    const { id, userId, paymentType, cardNumber, expirationDate, cvv } = this.selectedPayment
    this.model.patchValue({ id, userId, paymentType, cardNumber, expirationDate, cvv })
  }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    let payment = {
      id: this.model.get('id')?.value,
      userId: this.model.get('userId')?.value,
      paymentType: this.model.get('paymentType')?.value,
      cardNumber: this.model.get('cardNumber')?.value,
      expirationDate: this.model.get('expirationDate')?.value,
      cvv: this.model.get('cvv')?.value
    }

    this.paymentService.updatePayment(payment).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
  }

  cancel() {
    this.cancelEvent.emit()
  }

}
