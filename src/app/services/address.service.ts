import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Address } from '../interfaces/address'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl: string = ' http://localhost:3000/address'

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<any> {
    return this.http.get<Address[]>(this.baseUrl)
  }

  getUserAddresses(user: User) {
    return this.http.get<Address[]>(this.baseUrl + '?userId=' + user.id)
  }

  getAddress(id: number) {
    return this.http.get<Address>(this.baseUrl + '/' + id)
  }

  addAddress(address: Address) {
    return this.http.post<Address>(this.baseUrl, address)
  }

  updateAddress(address: Address) {
    return this.http.put<Address>(this.baseUrl + '/' + address.id, address)
  }

  deleteAddress(id: number) {
    return this.http.delete<Address>(this.baseUrl + '/' + id)
  }

}
