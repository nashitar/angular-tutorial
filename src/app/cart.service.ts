import { Injectable } from '@angular/core';

// import HttpClient from the @angular/common/http package
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  // inject HttpClient into the CartService constructor
  constructor(
    private http: HttpClient
  ) {}

  // define an items property to store the array of the current products in the cart
  items = [];
  
  // appends a product to an array of items
  addToCart(product) {
    this.items.push(product);
  }

  // collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  // returns an empty array of items
  clearCart() {
    this.items = [];
    return this.items;
  }

  // retrieves the shipping data
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
}