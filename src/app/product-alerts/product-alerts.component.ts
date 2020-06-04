import { Component, OnInit } from '@angular/core';

// set up the new product alerts component to receive a product as input

import { Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';


// @Component() indicates that the following class is a component
// provides metadata about the component, including its selector, templates, and styles
// the selector identifies the component. convention: Angular component selectors begin with the prefix app-, followed by the component name

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


// component definition also exports the class, ProductAlertsComponent, which handles functionality for the component

export class ProductAlertsComponent implements OnInit {

  // input indicates that the property value passes in from the component's parent, the product list component

  @Input() product;

  // output  allows the product alert component to emit an event when the value of the notify property changes

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}