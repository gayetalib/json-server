import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: any[] = [];
  cartItems: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.cartItems = this.cartService.getCart();
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCart();
  }

  isProductInCart(productId: number): boolean {
    return !!this.cartItems.find((item) => item.id === productId);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
