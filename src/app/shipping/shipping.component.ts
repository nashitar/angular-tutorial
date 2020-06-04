import { Component, OnInit } from '@angular/core';

// import cart service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // define shipping cost property
  shippingCosts;

  constructor(
    // inject the cart service in the ShippingComponent constructor
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}