import { Component, OnInit } from '@angular/core';
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

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private userService: UserService) {
    this.fetchProduct();
    this.isAdmin = this.userService.checkUserType;
  }

  fetchProduct(): void {
    const productId: number = this.activeRoute.snapshot.params.id;
    this.product$ = this.productService.fetchProduct(productId);
  }

  ngOnInit(): void {
  }

}
