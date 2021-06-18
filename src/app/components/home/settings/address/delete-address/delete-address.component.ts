import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/interfaces/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css']
})
export class DeleteAddressComponent implements OnInit {

  @Input() selectedAddress!: Address
  @Output() submitEvent = new EventEmitter()
  @Output() cancelEvent = new EventEmitter()

  constructor(private addressService: AddressService) { }

  ngOnInit(): void { }

  delete() {
    let id = this.selectedAddress.id

    this.addressService.deleteAddress(id).subscribe(response => {
      console.log(response)
      this.submitEvent.emit()
    })
  }

  cancel() {
    this.cancelEvent.emit()
  }

  displayAddress() {
    let address = this.selectedAddress
    return address.address + ' ' + address.city + ' ' + address.state + ' ' + address.zip
  }

}
