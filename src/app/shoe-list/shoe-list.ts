import { Component, OnInit } from '@angular/core';
import { Shoe } from './Shoe'; // Asegurate de que la ruta a tu Shoe.ts sea correcta

@Component({
  selector: 'app-shoe-list',
  standalone: false,
  templateUrl: './shoe-list.html',
  styleUrls: ['./shoe-list.scss']
})
export class ShoeList implements OnInit {

  // Definimos nuestro array de prueba (Mock) directamente acá
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
      stock: 3, // Ponemos stock bajo para probar el límite
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&auto=format&fit=crop&q=60',
      clearance: false,
      quantity: 0
    },
    {
      name: 'Suede Classic',
      brand: 'Puma',
      price: 85,
      stock: 0, // Probamos el comportamiento sin stock
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150&auto=format&fit=crop&q=60',
      clearance: false,
      quantity: 0
    }
  ];

  // El constructor queda completamente vacío, sin servicios inyectados
  constructor() { }

  ngOnInit(): void {
  }

  // Método que escucha el cambio de cantidad desde el input-integer
  onQuantityChange(shoe: Shoe, newQuantity: number): void {
    shoe.quantity = newQuantity;
  }

  // Cuando el usuario hace clic en "Reservar", procesamos la compra de forma local
  addToCart(shoe: Shoe): void {
    if (shoe.quantity > 0) {
      console.log('Click en comprar zapatilla (Simulado):', { name: shoe.name, quantity: shoe.quantity });
      
      // Restamos el stock localmente
      shoe.stock -= shoe.quantity;
      
      // Reseteamos la cantidad elegida a 0
      shoe.quantity = 0;
    }
  }

  // Alerta cuando se alcanza el stock máximo disponible
  maxReached(m: string) {
    alert(m);
  }
}