import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { LoginService } from 'src/app/services/login.service';
import { Address } from '../../../../interfaces/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public view = 'address'
  public addresses: Address[] = []
  public selectedAddress!: Address

  constructor(private router: Router, private addressService: AddressService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.addressService.getUserAddresses(this.loginService.getCurrentUser()).subscribe(response => this.addresses = response)
  }

  add() {
    this.view = 'add'
  }

  edit(address: Address) {
    this.selectedAddress = address
    this.view = 'edit'
  }

  delete(address: Address) {
    this.selectedAddress = address
    this.view = 'delete'
  }

  submit() {
    this.view = 'address'
  }

  cancel() {
    if (this.view === 'address') {
      this.router.navigate(['settings'])
    }
    else {
      this.view = 'address'
    }
  }

}
