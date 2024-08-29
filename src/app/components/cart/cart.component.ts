import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];


  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getCart();
  }

  increaseQuantity(item: any) {
    this.updateQuantity(item.id, item.quantity + 1);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      this.updateQuantity(item.id, item.quantity - 1);
    }
  }

  sendOrder() {
    const order = this.cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    console.log('Order:', order);

    localStorage.removeItem('cartItems');
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
