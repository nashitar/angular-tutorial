import { Component, OnInit } from '@angular/core';

// import CartService from the cart.service.ts file
import { CartService } from '../cart.service';

// import the FormBuilder service from the @angular/forms package
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  // define items property so that products can be stored in the cart
  items;

  // define the checkoutForm property to store the form model
  checkoutForm;

  constructor(

    // inject the CartService so that the cart component can use it
    private cartService: CartService,

    // inject the FormBuilder service
    private formBuilder: FormBuilder,

  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {

    // set the items using the cart service's getItems() method
    this.items = this.cartService.getItems();
  }

  // define an onSubmit() method to process the form. 
  // use the CartService clearCart() method to empty the cart items and reset the form after its submission
  
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}