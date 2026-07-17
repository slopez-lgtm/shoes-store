import { Component, OnInit } from '@angular/core';
import { Shoe } from './Shoe'; 
import { ShoeCartService } from '../shoe-cart.service';
import { ShoeDataService } from '../shoe-data.service';

@Component({
  selector: 'app-shoe-list',
  standalone: false,
  templateUrl: './shoe-list.html',
  styleUrls: ['./shoe-list.scss']
})
export class ShoeList implements OnInit {

  
  shoes: Shoe[] = [];

 
  constructor(
    private cartService: ShoeCartService,
    private dataService: ShoeDataService 
  ) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe(shoesFromApi => {
      this.shoes = shoesFromApi;
    });
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