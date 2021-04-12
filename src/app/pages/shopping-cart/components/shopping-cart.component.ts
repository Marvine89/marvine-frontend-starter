import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IUserProduct } from 'src/app/shared/interfaces/user.interface';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: IUserProduct[] = [];
  isLoading!: boolean;
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.userService.getUserId || 0;
    this.isLoading = true;
    this.cartService.fetchCartProducts(userId)
      .subscribe((products) => {
        this.products = products;
        this.setTotalPrice = products;
        this.isLoading = false;
      }, () => this.isLoading = false);
  }

  private set setTotalPrice(products: IUserProduct[]) {
    this.totalPrice = products.reduce((prev, current) => prev + (current.price * current.quantity), 0);
  }
}
