import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/interfaces/address';
import { AddressService } from 'src/app/services/address.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()
  model: FormGroup
  addresses: Address[] = []
  submitted = false

  constructor(private formBuilder: FormBuilder, private addressService: AddressService, private loginService: LoginService) { 
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
    this.addressService.getAddresses().subscribe(response => this.addresses = response)
  }

  generateId() {
    var max = 0
    this.addresses.forEach(address => {
      if (address.id > max) {
        max = address.id
      }
    })
    return max + 1
  }

  submit() {
    if (this.model.invalid) {
      this.submitted = true
      return
    }

    let address = {
      id: this.generateId(),
      userId: this.loginService.getCurrentUser().id,
      address: this.model.get('address')?.value,
      city: this.model.get('city')?.value,
      state: this.model.get('state')?.value,
      zip: this.model.get('zip')?.value
    }

    this.addressService.addAddress(address).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
    
  }

  cancel() {
    this.cancelEvent.emit()
  }

}
