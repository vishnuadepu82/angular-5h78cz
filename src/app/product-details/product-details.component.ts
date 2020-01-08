import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;
  constructor( private route:ActivatedRoute, private cartservice:CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product=products [+params.get('productId')];
    })
  }
  addToCart(product)
  {
    window.alert("product has been successfully added to cart");
    this.cartservice.addToCart(product);
  }

}