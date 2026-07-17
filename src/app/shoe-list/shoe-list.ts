import { Component, OnInit } from '@angular/core';
import { Shoe } from './Shoe'; 
import { ShoeCartService } from '../shoe-cart.service';

@Component({
  selector: 'app-shoe-list',
  standalone: false,
  templateUrl: './shoe-list.html',
  styleUrls: ['./shoe-list.scss']
})
export class ShoeList implements OnInit {

  shoes: Shoe[] = [
    {
      name: 'Air Force 1',
      brand: 'Nike',
      price: 120,
      stock: 5,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=150&auto=format&fit=crop&q=60',
      clearance: true,
      quantity: 0
    },
    {
      name: 'Forum Low',
      brand: 'Adidas',
      price: 110,
      stock: 3,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&auto=format&fit=crop&q=60',
      clearance: false,
      quantity: 0
    },
    {
      name: 'Suede Classic',
      brand: 'Puma',
      price: 85,
      stock: 0,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150&auto=format&fit=crop&q=60',
      clearance: false,
      quantity: 0
    }
  ];

  constructor(private cartService: ShoeCartService) { }

  ngOnInit(): void {
  }

  addToCart(shoe: Shoe): void {
    if (shoe.quantity > 0) {
      this.cartService.addToCart(shoe);
      shoe.stock -= shoe.quantity;
      shoe.quantity = 0;
    }
  }

  maxReached(message: string): void {
    alert(message);
  }
}