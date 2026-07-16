import { Injectable } from '@angular/core';
import { Shoe } from './shoe-list/Shoe'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoeCartService {

  
  private _cartList: Shoe[] = [];


  cartList: BehaviorSubject<Shoe[]> = new BehaviorSubject<Shoe[]>([]);

  constructor() { }

  addToCart(shoe: Shoe) {

    let item: Shoe | undefined = this._cartList.find((v1) => v1.name == shoe.name);
    
    if (!item) {

      this._cartList.push({ ...shoe });
    } else {

      item.quantity += shoe.quantity;
    }

    this.cartList.next(this._cartList);
  }
}