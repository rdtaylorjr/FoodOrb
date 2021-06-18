import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  model: FormGroup
  public items: Item[] = []
  public filtered: Item[] =[]
  search = ''
  view = 'displayItems'
  selectedItem: Item = this.items[0]

  constructor(private formBuilder: FormBuilder, private router: Router, private itemService: ItemService, private cartService: CartService) { 
    this.model = this.formBuilder.group({
      search: ['']
    })
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(response => {
      this.items = response
      this.filtered = this.items
    })
  }

  filter() {
    this.items = this.filtered.filter(
      (item: Item) => 
        (item.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) ||
        (item.description.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
      );
  }

  confirm(item: Item) {
    this.selectedItem = item
    this.view = 'addToCart'
  }

  cancel() {
    this.view = 'displayItems'
  }

  addToCart() {
    this.cartService.addToCart(this.selectedItem)
    this.router.navigate(['home/cart'])
  }

}
