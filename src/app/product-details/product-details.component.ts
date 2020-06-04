import { Component, OnInit } from '@angular/core';

// arrange to use product data from an external file
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

// import cart service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  // define the product property 
  product;

  // inject the ActivatedRoute into the constructor
  constructor(
    private route: ActivatedRoute,

    // inject cart service
    private cartService: CartService
  ) { }

  // subscribe to route parameters and fetch the product based on the productId
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  // method that receives the current product, uses the cart service's addToCart() method to add the product the cart, and displays a message that product is added to the cart
  
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}