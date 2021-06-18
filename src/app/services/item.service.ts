import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Item } from '../interfaces/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl: string = ' http://localhost:3000/item'

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.baseUrl)
  }

  getItem(id: number) {
    return this.http.get<Item>(this.baseUrl + '/' + id)
  }

  addItem(item: Item) {
    return this.http.post<Item>(this.baseUrl, item)
  }

  updateItem(item: Item) {
    return this.http.put<Item>(this.baseUrl + '/' + item.id, item)
  }

  deleteItem(id: number) {
    return this.http.delete<Item>(this.baseUrl + '/' + id)
  }

}