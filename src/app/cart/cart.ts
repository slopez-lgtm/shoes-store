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

  constructor(private cart: ShoeCartService) {
    this.cartList$ = this.cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }
}