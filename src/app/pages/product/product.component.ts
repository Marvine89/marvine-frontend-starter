import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$!: Observable<IProduct>;
  isAdmin: boolean = false;
  userId!: number;
  qty: number = 1;
  addToCartLoading: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private userService: UserService,
    private snackBar: MatSnackBar) {

    this.isAdmin = this.userService.checkUserType;
    this.userId = this.userService.getUserId || 0;
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    const productId: number = this.activeRoute.snapshot.params.id;
    this.product$ = this.productService.fetchProduct(productId);
  }

  addToCard(product: IProduct): void {
    this.addToCartLoading = true;
    this.productService.addToCard(this.userId, product.id, this.qty)
      .subscribe(() => {
        this.qty++;
        this.showMessage();
        this.addToCartLoading = false;
      }, () => this.addToCartLoading = false);
  }

  showMessage(): void {
    this.snackBar.open('Product has bee added successfully', 'Ok', {
      duration: 6000,
    });
  }

  goBack(): void {
    this.location.back();
  }
}
