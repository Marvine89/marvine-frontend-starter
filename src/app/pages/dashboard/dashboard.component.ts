import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bannerImg = "assets/images/banner-image.lg.jpg";
  searchText: string = '';
  products: IProduct[] = [];
  currentPage: number = 1;
  isLoading: { init: boolean; more: boolean } = { init: true, more: false };

  constructor(private productService: ProductService, private router: Router) { }

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

  // Load More product on scroll reach end
  loadMoreProducts(): void {
    const page = (Math.trunc(this.products.length / 12) + 1);
    if (this.currentPage === page || this.searchText) return;

    this.currentPage = page;
    this.isLoading.more = true;
    this.productService.fetchProducts(page)
      .subscribe(
        (products) => {
          this.products = [...this.products, ...products];
          this.isLoading.more = false;
        },
        () => this.isLoading.more = false);
  }

  inputChanged(value: string): void {
    if (value === this.searchText) return;
    this.searchText = value;
    this.seachProducts();
  }

  // Search for specific product
  seachProducts(): void {
    if (!this.searchText) {
      this.loadProducts();
      return;
    }

    this.isLoading.init = true;
    this.productService.searchProducts(this.searchText)
      .subscribe(
        (products) => {
          this.products = products;
          this.isLoading.init = false;
        },
        () => this.isLoading.init = false);
  }

  productClicked(product_id: number): void {
    this.router.navigate([`/product/${product_id}`]);
  }
}
