import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
checkoutForm;
  constructor( private CartService:CartService,
  private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.items=this.CartService.GetItems();
    
    this.checkoutForm=this.formbuilder.group({
  name:'',
  address:''
});
  }


onSubmit(customerData){
  console.warn("your purchase details submitted successfully",customerData);
  this.items=this.CartService.CleartCart();
  this.checkoutForm.reset();
}

}