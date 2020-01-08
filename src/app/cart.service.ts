import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor( private httpClient:HttpClient) { }
items=[];
addToCart(product)
{
  this.items.push(product);
}
GetItems()
{
  return this.items;

}
CleartCart()
{
  this.items=[];
  return this.items;
}
getShippingCosts()
{
  return this.httpClient.get('/assets/shipping.json');
}
}