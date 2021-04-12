import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: IProduct[] = [];
  isLoading!: boolean;
  totalPrice: number = 0;

  constructor(
    private productService: ProductService,
    private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.userService.getUserId || 0;
    this.isLoading = true;
    this.productService.fetchMergedCart(userId)
      .subscribe((products) => {
        this.products = products;
        this.totalPrice = products.reduce((prev, current) => prev + current.price, 0);
        this.isLoading = false;
      }, () => this.isLoading = false);
  }
}
