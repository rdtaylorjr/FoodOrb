import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/interfaces/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  @Input() selectedAddress!: Address
  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()
  model: FormGroup
  submitted = false

  constructor(private formBuilder: FormBuilder, private addressService: AddressService) { 
    this.model = this.formBuilder.group({
      id: [''],
      userId: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required, Validators.pattern('^[A-Z]{2}$')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(-[0-9]{4})?$')]]
    })
  }

  ngOnInit(): void { 
    const { id, userId, address, city, state, zip } = this.selectedAddress
    this.model.patchValue({ id, userId, address, city, state, zip })
  }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    let address = {
      id: this.model.get('id')?.value,
      userId: this.model.get('userId')?.value,
      address: this.model.get('address')?.value,
      city: this.model.get('city')?.value,
      state: this.model.get('state')?.value,
      zip: this.model.get('zip')?.value
    }

    this.addressService.updateAddress(address).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
  }

  cancel() {
    this.cancelEvent.emit()
  }

}
