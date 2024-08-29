import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
    console.log('cartItems:', this.cart);
  }

  private loadCart() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      console.log('cartItems loaded:', this.cart);
    }
  }

  addToCart(product: any) : boolean {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      return false; // Product already in cart
    } else {
      this.cart.push({ ...product, quantity: 1 });
      console.log('cartItems:', this.cart);
      this.saveCart();
      return true;
    }
  }

  getCart() {
    console.log('cartItems:', this.cart);
    return this.cart;
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find((p) => p.id === productId);
    if (product) {
      product.quantity = quantity;
      this.saveCart();
      console.log('cartItems:', this.cart);
    }
  }
}
