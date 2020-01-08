import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shipping-cost',
  templateUrl: './shipping-cost.component.html',
  styleUrls: ['./shipping-cost.component.css']
})
export class ShippingCostComponent implements OnInit {
shippingcosts=[];
  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.shippingcosts=this.cartservice.getShippingCosts();
  }

}