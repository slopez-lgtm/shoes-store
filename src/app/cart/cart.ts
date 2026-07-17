import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../shoe-list/Shoe'; 
import { ShoeCartService } from '../shoe-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  
  cartList$: Observable<Shoe[]>;

  constructor(private cartStore: ShoeCartService) {
    this.cartList$ = this.cartStore.cartList.asObservable();
  }

  ngOnInit(): void {}

  
  getTotal(items: Shoe[] | null): number {
    if (!items) return 0;
   
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}