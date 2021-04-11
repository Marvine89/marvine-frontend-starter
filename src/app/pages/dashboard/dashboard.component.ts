import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bannerImg = "assets/images/banner-image.lg.jpg";
  searchText: string = '';
  products!: Product[];
  isLoading: { init: boolean; more: boolean } = { init: true, more: false };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load Initial 12 products
  loadProducts(): void {
    this.isLoading.init = true;
    this.productService.fetchProducts()
      .subscribe(
        (products) => {
          this.products = products;
          this.isLoading.init = false;
        },
        () => this.isLoading.init = false);
  }

  inputChanged(value: string): void {
    this.searchText = value;
  }
}
