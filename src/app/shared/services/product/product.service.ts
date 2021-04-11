import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';
import { ErrorService } from '../error/error.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpService: HttpService, private errorService: ErrorService) { }

  fetchProducts(page: number = 1): Observable<Product[]> {
    return this.httpService.get<Product[]>(`/products?_page=${page}&_limit=12`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  searchProducts(keyword: string = ""): Observable<any> {
    return this.httpService.get(`/products?q=${keyword}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  fetchProduct(product_id: number): Observable<any> {
    return this.httpService.get(`/products/${product_id}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  fetchCard(user_id: number): Observable<any> {
    return this.httpService.get(`/carts/${user_id}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  addProduct(product: any): Observable<any> {
    return this.httpService.post("/products", product).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  addToCard(user_id: number, product: any): Observable<any> {
    return this.httpService.post(`/carts/${user_id}`, product).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  updateProduct(user_id: number, product_id: any): Observable<any> {
    return this.httpService.put(`/products/${user_id}`, product_id).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  deleteProduct(user_id: number): Observable<any> {
    return this.httpService.delete(`/products/${user_id}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  deleteProductToCard(user_id: number, product_id: number): Observable<any> {
    return this.httpService.delete(`/carts/${user_id}/${product_id}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }
}
